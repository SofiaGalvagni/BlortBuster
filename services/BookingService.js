import Booking from "../models/models.js";

class BookingService {

    getAllBookings = async()=>{
      try {
        return await Booking.Booking.findAll()
      } catch (error) {
        
      }
    }
    getById = async(id)=>{
      try {
        return await Booking.Booking.findByPk(id)
      } catch (error) {
        
      }
    }
    updateBooking = async(id, newData)=>{
      try {
        const booking = await this.getById(id)
        
        booking.set({...newData})
    
        return await booking.save()
      } catch (error) {
        throw error;
      }
    }
    deleteBooking = async(id)=>{
      try {
        const booking = await this.getById(id)
        return await booking.destroy()
      } catch (error) {
        throw error;
      }
    }




    checkUserPending = async (userId)=>{
      try {
        const MAX_ALQUILADO = 3;
        const {count} = await Booking.Booking.findAndCountAll({
          where: {
            userId: userId,
            devuelto: false
          },
        })

        return count < MAX_ALQUILADO;

      } catch (error) {
        throw error
      }
    }

    checkMovieAlreadyBooked = async (userId, movieId)=>{
      try {
        const alreadyBooked = await Booking.Booking.findOne({ 
          where: { 
            userId: userId,
            movieId: movieId,
            devuelto: false
          } 
        });

        let response = false
        if(!alreadyBooked){
          response = true
        }

        return response

      } catch (error) {
        throw error
      }
    }
    
    createBooking = async (userId, movie)=>{
      try {
        
        const movieId = movie.id;

        //verificar cantidad de peliculas permitida por usuario CREAR
        console.log('hola')
        const maxBookings = await this.checkUserPending(userId)
        if(!maxBookings) throw new Error("Alcanzó maxima cantidad de alquileres");
        
        //verificar si tiene la misma pelicula ya alquilada CREAR
        const alreadyBooked = await this.checkMovieAlreadyBooked(userId, movieId)
        if(!alreadyBooked) throw new Error("Ya tiene alquilada la pelicula deseada");

        const newBooking = {
          userId: userId,
          movieId: movieId,
        }

        const reservation = await Booking.Booking.create(newBooking)

        return reservation;
      } catch (error) {
        throw error;
      }
    }

    finishBooking = async(id)=>{
      const theBooking = await this.getById(id)
      theBooking.set({devuelto: true})
      return await theBooking.save()
    }


    findOne = async (data) =>{
      return Booking.Booking.findOne(data)
    }

    
}

export default BookingService;