import { DataTypes, Model } from "sequelize";
import connectionDb from "../connection/connectionDb.js";

class User extends Model{}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alreadyBooked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }
    },
    {
      sequelize: connectionDb,
      modelName: "User",
    }
)

export default User;