import UserService from "../services/UserService.js";

class UserController {


    userServices = new UserService();
  
    getAllUsers = async(req, res)=>{
      try {
        const data = await this.UserService.getAllUsers();
        res.status(201).send({
          message: data,
        });
        
      } catch (error) {
        res.status(400).send({ succces: false, message: error.message });
      }
    }
  
    createUser= async (req, res)=>{
      try {
        const newUser = {
          name : req.body.name, 
          email : req.body.email, 
          password : req.body.password, 
          alreadyBooked: false
        };
        const data = await this.userServices.createUser(newUser)
  
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
        const data = await this.userServices.getById(id)
        res.status(201).send({
          message: data,
        });
        
      } catch (error) {
        
      }
    }
  
    updateUser = async(req, res)=>{
      try {
        const {id} = req.params;
        const newData = req.body;
        const data = await this.userServices.updateUser(id, newData)
        res.status(201).send({
          message: data,
        });
        
      } catch (error) {
        
      }
    }
  
    deleteUser = async(req, res)=>{
      try {
        const {id} = req.params;
        const data = await this.userServices.deleteUser(id)
        res.status(201).send({
          message: data,
        });
        
      } catch (error) {
        
      }
    }
    
  
  
}

export default UserController;