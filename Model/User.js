const pool= require('./connection').pool;

const getAllUsers = (request, response) => {
  pool.query('SELECT * FROM users;', (err, res) => {
    if (err) {throw err}
    response.status(200).json(res.rows)
  });
}

const getAllTransitions = (request, response) => {
  pool.query('SELECT * FROM transitions;', (err, res) => {
    if (err) {throw err}
    response.status(200).json(res.rows)
  });
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM users WHERE id = $1;',[id], (err, res) => {
    if (err) {throw err}
    response.status(200).json(res.rows)
  });
}

const getUserByName = (request, response) => {
  const name = request.params.name
  pool.query('SELECT * FROM users WHERE name = $1;',[name], (err, res) => {
    if (err) {throw err}
    response.status(200).json(res.rows)
  });
}

const createUser = (request, response) => {
  const name = request.body.name;

  pool.query('INSERT INTO users (name,points,created_on,modified_on) VALUES ($1,0,NOW(),NOW())', [name], (error, results) => {
    if (error) {throw error}
    pool.query('SELECT * FROM users;', (err, res) => {
      if (err) {throw err}
      response.status(200).json(res.rows)
    });
  })
}

const updateNameById = (request, response) => {
  const id = parseInt(request.params.id)
  const name = request.body.name

  pool.query(
    'UPDATE users SET name = $1, modified_on=NOW() WHERE id = $2',[name, id],(error) => {
      if (error) {throw error}
      pool.query('SELECT * FROM users;', (err, res) => {
        if (err) {throw err}
        response.status(200).json(res.rows)
      });
    }
  )
}

const updatePointsByName = (request, response) => {
  const name = request.body.name;
  const description = request.body.description;
  const points = parseInt(request.body.points);

  pool.query('SELECT * FROM users WHERE name = $1;',[name], (err, res) => {
    if (err) {throw err}
    if(res.rows[0]==undefined)
      response.status(404).json({message:"User not found"})
    else {
      const newPoints=parseInt(res.rows[0].points)+points
      pool.query(
        'UPDATE users SET points = $1, modified_on=NOW() WHERE name = $2',[newPoints, name],(error) => {
          if (error) {throw error}
          pool.query('SELECT * FROM users;', (errSelect, resSelect) => {
            if (errSelect) {throw errSelect}
            response.status(200).json(resSelect.rows)
          });
        }
      )
    }
  });

  pool.query(
    'INSERT INTO transitions (name,points,description,created_on,modified_on) VALUES ($1,$2,$3,NOW(),NOW())',[name,points,description],(error) => {
      if (error) {throw error}
    }
  )
}

const deleteUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error) => {
    if (error) {throw error}
    pool.query('SELECT * FROM users;', (err, res) => {
      if (err) {throw err}
      response.status(200).json(res.rows)
    });
  })
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByName,
  createUser,
  updateNameById,
  deleteUserById,
  updatePointsByName,
  getAllTransitions
}