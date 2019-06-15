const pool= require('./connection').pool;

const createUser = (request, response) => {
  const name = request.body.name;
  const id = request.body.id;

  pool.query('INSERT INTO users (name,owner_id,points,created_on,modified_on) VALUES ($1,$2,0,NOW(),NOW())', [name,id], (error, results) => {
    if (error) {throw error}
    response.status(200).json(results.rows)
  })
}

const updateNameById = (request, response) => {
  const id = request.body.id
  const name = request.body.name

  pool.query(
    'UPDATE users SET name = $1, modified_on=NOW() WHERE id = $2',[name, id],(error,results) => {
      if (error) {throw error}
      response.status(200).json(results.rows)
    }
  )
}

const getAllUsersWithId = (request, response) => { 
  const owner_id = request.body.owner_id;
  pool.query('SELECT * FROM users where owner_id=$1 ORDER BY points DESC',[owner_id], (err, res) => {
    if (err) {throw err}
    response.status(200).json(res.rows)
  });
}

const getAllTransitionsWithId = (request, response) => {
  const owner_id = request.body.owner_id;
  pool.query('SELECT transitions.id AS id, transitions.created_on AS created_on, transitions.description AS description, transitions.points AS points, users.name AS name FROM transitions INNER JOIN users ON transitions.user_id = users.id WHERE users.owner_id=$1 ORDER BY transitions.modified_on DESC', [owner_id], (err, res) => {
    if (err) {throw err}
    response.status(200).json(res.rows)
  });
}

const updatePointsById = (request, response) => {
  const user_id = request.body.user_id;
  const owner_id = request.body.owner_id;
  const description = request.body.description;
  const points = parseInt(request.body.points);

  pool.query('SELECT * FROM users WHERE id = $1;',[user_id], (err, res) => {
    if (err) {throw err}
    if(res.rows[0]==undefined)
      response.status(404).json({message:"User not found"})
    else {
      const newPoints=parseInt(res.rows[0].points)+points
      pool.query(
        'UPDATE users SET points = $1, modified_on=NOW() WHERE id = $2',[newPoints, user_id],(error,result) => {
          if (error) {throw error}
          response.status(200).json(result.rows)
        }
      )
    }
  });

  pool.query(
    'INSERT INTO transitions (points,description,created_on,modified_on,user_id,owner_id) VALUES ($1,$2,NOW(),NOW(),$3,$4)',[points,description,user_id,owner_id],(error) => {
      if (error) {throw error}
    }
  )
}

const deleteUserById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('DELETE FROM transitions WHERE user_id = $1', [id], (error) => { if (error) {throw error} });
  pool.query('DELETE FROM users WHERE id = $1', [id], (error) => { if (error) {throw error} });
  response.json(200).json({});
}

module.exports = {
  createUser,
  updateNameById,
  deleteUserById,
  updatePointsById,
  getAllUsersWithId,
  getAllTransitionsWithId
}