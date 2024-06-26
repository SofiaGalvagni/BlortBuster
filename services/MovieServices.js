import Movie from "../models/Movie.js";


class MovieServices{

getAllMovies = async()=>{
  try {
    return await Movie.findAll({
      attributes: ["name", "description", "director"],
    })
  } catch (error) {
    console.error("Error fetching all movies:", error);
    throw new Error("Unable to fetch movies");
  }
}

getById = async(id)=>{
  try {
    const movie = await Movie.findByPk(id);
    if (!movie) {
      throw new Error("Movie not found");
    }
    return movie;
  } catch (error) {
    console.error(`Error fetching movie with id ${id}:`, error);
    throw new Error("Unable to fetch movie");
  }
}


createMovie = async (newMovie)=>{
  try {
      return await Movie.create(newMovie);
  } catch (error) {
    console.error("Error creating new movie:", error);
    throw new Error("Unable to create movie");
  }
}

updateMovie = async(id, newData)=>{
  try {
    const movie = await this.getById(id)
    if (!movie) {
      throw new Error("Movie not found");
    }
    movie.set({...newData})
    return await movie.save()
  } catch (error) {
    console.error(`Error updating movie with id ${id}:`, error);
    throw new Error("Unable to update movie");
  }
}

deleteMovie = async(id)=>{
  try {
    const movie = await this.getById(id)
    if (!movie) {
      throw new Error("Movie not found");
    }
    return await movie.destroy()
  } catch (error) {
    console.error(`Error deleting movie with id ${id}:`, error);
    throw new Error("Unable to delete movie");
  }
}

reservarMovie = async()=>{
  try {
    // Implementar logica de reserva
} catch (error) {
    console.error("Error reserving movie:", error);
    throw new Error("Unable to reserve movie");
}
}

}

export default MovieServices;