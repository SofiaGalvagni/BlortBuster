import Booking from "../models/Booking.js";

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
    
    
    createBooking = async (newBooking)=>{
      try {
          return await Booking.create(newBooking);
      } catch (error) {
      
      }
    }
    
    updateBooking = async(id, newData)=>{
      try {
        const Booking = await this.getById(id)
        
        Booking.set({...newData})
    
        return await Booking.save()
      } catch (error) {
        
      }
    }
    
    deleteBooking = async(id)=>{
      try {
        const Booking = await this.getById(id)
        return await Booking.destroy()
      } catch (error) {
        
      }
    }
}

export default BookingService;