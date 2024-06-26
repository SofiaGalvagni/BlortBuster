import User from "../models/User.js";
import { generateToken } from "../utils/token.js";

class UserService {


    getAllUsers = async()=>{
      try {
        return await User.findAll({attributes:['name']});
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
        return error;
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



    validatePassword = async (pass)=>{
      try {
        const validatation = User.validatePassword(pass);
        return validatation
      } catch (error) {
        throw error;
      }
    }


    login = async (email, password) => {
      try {
        const data = await User.findOne({ where: { email } });
        if (!data) throw new Error("Credenciales incorrectas");

        const validatePassword = await data.validatePassword(password);
        if (!validatePassword) throw new Error("Credenciales incorrectas");

        const payload = {
          id: data.id,
          name: data.name,
          email: data.email,
        };

        const token = generateToken(payload);
        return token

      } catch (error) {
        throw error;
      }
    };

    
}

export default UserService;