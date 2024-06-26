import BookingService from "../services/BookingService.js";

class BookingController {


    bookingService = new BookingService();
  
    getAllBookings = async(req, res)=>{
      try {
        const data = await this.bookingService.getAllBookings();
        res.status(201).send({
          message: data,
        });
        
      } catch (error) {
        res.status(400).send({ succces: false, message: error.message });
      }
    }
  
    createBooking= async (req, res)=>{
      try {
        const newBooking = {
          name : req.body.name, 
          email : req.body.email, 
          password : req.body.password, 
          alreadyBooked: false
        };
        const data = await this.bookingService.createBooking(newBooking)
  
        res.status(201).send({
          message: data,
        });
        
      } catch (error) {
        res.status(400).send({ succces: false, message: error.message });
      }
      
    }
  
    getById = async(req, res)=>{
      try {
        const {id} = req.params;
        const data = await this.bookingService.getById(id)
        res.status(201).send({
          message: data,
        });
        
      } catch (error) {
        
      }
    }
  
    updateBooking = async(req, res)=>{
      try {
        const {id} = req.params;
        const newData = req.body;
        const data = await this.bookingService.updateBooking(id, newData)
        res.status(201).send({
          message: data,
        });
        
      } catch (error) {
        
      }
    }
  
    deleteBooking = async(req, res)=>{
      try {
        const {id} = req.params;
        const data = await this.bookingService.deleteBooking(id)
        res.status(201).send({
          message: data,
        });
        
      } catch (error) {
        
      }
    }
}

export default BookingController;