class MovieController{

  getAllMovies = (req, res)=>{
    res.status(201).send({
      message: "Todas las pelis",
    });
  }

  getById = (req, res)=>{
    res.status(201).send({
      message: `La peli ${req.params.id} es la mejor pelicula`,
    });
  }
  

}

export default MovieController; 