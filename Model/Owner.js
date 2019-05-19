const pool= require('./connection').pool;

const getAllOwners = (request, response) => {
  pool.query('SELECT * FROM owners;', (err, res) => {
    if (err) {throw err}
    response.status(200).json(res.rows)
  });
}

const getOwnerById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM owners WHERE id = $1;',[id], (err, res) => {
    if (err) {throw err}
    response.status(200).json(res.rows)
  });
}

const login = (request, response) => {
  const username = request.body.username;
  const password = request.body.password;
  pool.query('SELECT * FROM owners WHERE username = $1 AND password = $2;',[username,password], (err, res) => {
    if (err) {throw err}
    if(res.rows[0]==undefined)
      response.status(404).json({message:"User not found"})
    else
      response.status(200).json(res.rows[0])
  });
}

const createOwner = (request, response) => {
  const username = request.body.username;
  const password = request.body.password;

  pool.query('INSERT INTO owners (username,password,created_on,modified_on) VALUES ($1,$2,NOW(),NOW())', [username,password], (error, results) => {
    if (error) {throw error}
    pool.query('SELECT * FROM owners;', (err, res) => {
      if (err) {throw err}
      response.status(200).json(res.rows)
    });
  })
}

const deleteOwnerById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM owners WHERE id = $1', [id], (error) => {
    if (error) {throw error}
    pool.query('SELECT * FROM owners;', (err, res) => {
      if (err) {throw err}
      response.status(200).json(res.rows)
    });
  })
}

module.exports = {
  getAllOwners,
  getOwnerById,
  login,
  createOwner,
  deleteOwnerById
}