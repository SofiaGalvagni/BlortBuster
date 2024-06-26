import Booking from "../models/Booking.js";

class BookingService {


    getAllBookings = async()=>{
      try {
        return await Booking.findAll()
      } catch (error) {
        console.error("Error fetching all bookings:", error);
        throw new Error("Unable to fetch bookings");
      }
    }
    
    getById = async(id)=>{
      try {
        const booking = await Booking.findByPk(id);
        if (!booking) {
          throw new Error("Booking not found");
        }
        return await booking
      } catch (error) {
          console.error(`Error fetching booking with id ${id}:`, error);
          throw new Error("Unable to fetch booking");
      }
    }
    
    
    createBooking = async (newBooking)=>{
      try {
          return await Booking.create(newBooking);
      } catch (error) {
        console.error("Error creating new booking:", error);
        throw new Error("Unable to create booking");
      }
    }
    
    updateBooking = async(id, newData)=>{
      try {
        const Booking = await this.getById(id)
        if (!booking) {
          throw new Error("Booking not found");
        }
        Booking.set({...newData})
    
        return await Booking.save()
      } catch (error) {
        console.error(`Error updating booking with id ${id}:`, error);
        throw new Error("Unable to update booking");
      }
    }
    
    deleteBooking = async(id)=>{
      try {
        const Booking = await this.getById(id)
        if (!booking) {
          throw new Error("Booking not found");
        }
        return await Booking.destroy()
      } catch (error) {
        console.error(`Error deleting booking with id ${id}:`, error);
        throw new Error("Unable to delete booking");
      }
    }
}

export default BookingService;