import User from "../models/User.js";

class UserService {


    getAllUsers = async()=>{
      try {
        return await User.findAll({
          attributes: ["name", "email", "password"],
        })
      } catch (error) {
        
      }
    }
    
    getById = async(id)=>{
      try {
        return await User.findByPk(id)
      } catch (error) {
        
      }
    }
    
    
    createUser = async (newUser)=>{
      try {
          return await User.create(newUser);
      } catch (error) {
      
      }
    }
    
    updateUser = async(id, newData)=>{
      try {
        const user = await this.getById(id)
        
        user.set({...newData})
    
        return await user.save()
      } catch (error) {
        
      }
    }
    
    deleteUser = async(id)=>{
      try {
        const user = await this.getById(id)
        return await user.destroy()
      } catch (error) {
        
      }
    }
}

export default UserService;