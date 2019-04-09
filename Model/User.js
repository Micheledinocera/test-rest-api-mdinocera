const pool= require('./connection').pool;

const getAllUsers = (request, response) => {
  pool.query('SELECT * FROM users;', (err, res) => {
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
}