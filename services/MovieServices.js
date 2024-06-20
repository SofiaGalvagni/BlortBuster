import Movie from "../models/Movie.js";


class MovieServices{

getAllMovies = async()=>{
  try {
    return await Movie.findAll({
      attributes: ["name", "description", "director"],
    })
  } catch (error) {
    
  }
}

getById = async(id)=>{
  try {
    return await Movie.findByPk(id)
  } catch (error) {
    
  }
}


createMovie = async (newMovie)=>{
  try {
      return await Movie.create(newMovie);
  } catch (error) {
  
  }
}

updateMovie = async(id, newData)=>{
  try {
    const movie = await this.getById(id)
    
    movie.set({...newData})

    return await movie.save()
  } catch (error) {
    
  }
}

deleteMovie = async(id)=>{
  try {
    const movie = await this.getById(id)
    return await movie.destroy()
  } catch (error) {
    
  }
}


}

export default MovieServices;