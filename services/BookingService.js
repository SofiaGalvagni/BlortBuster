import Booking from "../models/Booking.js";
import MovieService from "../services/MovieServices.js";

const movieService = new MovieService()

class BookingService {



    getAllBookings = async()=>{
      try {
        return await Booking.findAll()
      } catch (error) {
        
      }
    }
    
    getById = async(id)=>{
      try {
        return await Booking.findByPk(id)
      } catch (error) {
        
      }
    }
    
    
    createBooking = async (userId, movie)=>{
      try {
        
        const movieId = movie.id;

        //verificar cantidad de peliculas permitida por usuario CREAR
        const maxBookings = await checkUserPending(userId)
        if(!maxBookings) throw new Error("Alcanzó maxima cantidad de alquileres");
        
        //verificar si tiene la misma pelicula ya alquilada CREAR
        const alreadyBooked = await checkMovieAlreadyBooked(userId, movieId)
        if(!alreadyBooked) throw new Error("Ya tiene alquilada la pelicula deseada");

        const newBooking = {
          Movie: movieId,
          User: userId
        }
        const reservation = await Booking.create(newBooking)

        return reservation;
      } catch (error) {
        throw error;
      }
    }
    
    updateBooking = async(id, newData)=>{
      try {
        const Booking = await this.getById(id)
        
        Booking.set({...newData})
    
        return await Booking.save()
      } catch (error) {
        throw error;
      }
    }
    
    deleteBooking = async(id)=>{
      try {
        const Booking = await this.getById(id)
        return await Booking.destroy()
      } catch (error) {
        throw error;
      }
    }

    
}

export default BookingService;