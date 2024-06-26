import { DataTypes, Model } from "sequelize";
import connectionDb from "../connection/connectionDb.js";

class Booking extends Model{


}

Booking.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey:true
  },
  devuelto: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
},
{
  sequelize: connectionDb,
  modelName: "Booking",
}
);

export default Booking;