const pool= require('./connection').pool;

const getAllFavorites = (request, response) => {
  pool.query('SELECT * FROM favorites;', (err, res) => {
    if (err) {throw err}
    response.status(200).json(res.rows)
  });
}

const createFavorite = (request, response) => {
  const points = parseInt(request.body.points);
  const description = request.body.description;

  pool.query('INSERT INTO favorites (points,description,created_on,modified_on) VALUES ($1,$2,NOW(),NOW())', [points,description], (error, results) => {
    if (error) {throw error}
    pool.query('SELECT * FROM favorites;', (err, res) => {
      if (err) {throw err}
      response.status(200).json(res.rows)
    });
  })
}

const updateFavoriteById = (request, response) => {
  const id = parseInt(request.body.id);
  const description = request.body.description;
  const points = parseInt(request.body.points);

  pool.query('SELECT * FROM favorites WHERE id = $1;',[id], (err, res) => {
    if (err) {throw err}
    if(res.rows[0]==undefined)
      response.status(404).json({message:"Favorite not found"})
    else {
      pool.query(
        'UPDATE favorites SET points = $1, description= $2, modified_on=NOW() WHERE id = $3',[points, description,id],(error) => {
          if (error) {throw error}
          pool.query('SELECT * FROM favorites;', (errSelect, resSelect) => {
            if (errSelect) {throw errSelect}
            response.status(200).json(resSelect.rows)
          });
        }
      )
    }
  });
}

const deleteFavoriteById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM favorites WHERE id = $1', [id], (error) => {
    if (error) {throw error}
    pool.query('SELECT * FROM favorites;', (err, res) => {
      if (err) {throw err}
      response.status(200).json(res.rows)
    });
  })
}

module.exports = {
  getAllFavorites,
  deleteFavoriteById,
  updateFavoriteById,
  createFavorite
}