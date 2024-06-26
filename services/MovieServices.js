import Movie from "../models/Movie.js";
import BookingService from "./BookingService.js";

const bookingService = new BookingService();


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



bookMovie = async (userId, movieId) =>{
   try {
   
  //traer y verificar existencia de pelicula deseada
  const movie = await getById(movieId);
  if (!movie) throw new Error("Movie not found"); 

  //verificar si hay stock disponible de la pelicula deseada. CREAR
  if(movie.stockDisponible <= 0) throw new Error("No hay stock de pelicula deseada");

  //al final de todo
  const reserva =  await bookingService.createBooking(userId, movie);
  if(!reserva) throw new Error("No fué posible crear Reserva");

  let newStockAlquilado = movie.stockAlquilado + 1;
  let newStockDisponible = movie.stockDisponible - 1;
  movie.set({ stockAlquilado: newStockAlquilado, stockDisponible: newStockDisponible});
  await movie.save();

  return reserva;
 
} catch (error) {
    throw error
}  
}

returnMovie = async (userId, movieId) =>{
try {
  
} catch (error) {
  throw error
}
}

}

export default MovieServices;