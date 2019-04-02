const pool= require('./connection').pool;

const getAllTest = (request, response) => {
  pool.query('SELECT * FROM test;', (err, res) => {
    if (err) {throw err}
    response.status(200).json(res.rows)
  });
}

const getTestById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM test WHERE id = $1;',[id], (err, res) => {
    if (err) {throw err}
    response.status(200).json(res.rows)
  });
}

const createTest = (request, response) => {
  const name = request.body.name;

  pool.query('INSERT INTO test (name,created_on) VALUES ($1,NOW())', [name], (error, results) => {
    if (error) {throw error}
    console.log(results);
    response.status(201).send(`User added with ID: ${results}`)
  })
}

const updateNameById = (request, response) => {
  const id = parseInt(request.params.id)
  const name = request.body.name

  pool.query(
    'UPDATE test SET name = $1 WHERE id = $2',[name, id],(err, results) => {
      if (err) {throw err}
      response.status(200).send(`Test modified with ID: ${id}`)
    }
  )
}
  
const deleteTestById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM test WHERE id = $1', [id], (err, results) => {
    if (err) {throw err}
    response.status(200).send(`Test deleted with ID: ${id}`)
  })
}

module.exports = {
    getAllTest,
    getTestById,
    createTest,
    updateNameById,
    deleteTestById,
    }