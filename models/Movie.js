import { DataTypes, Model } from "sequelize";
import connectionDb from "../connection/connectionDb.js";

class Movie extends Model{}

Movie.init({
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey:true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stockDisponible: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  stockAlquilado: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precio: {
    type: DataTypes.DOUBLE,
    allowNull:false
  },
  isReserved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }

  },
  {
    sequelize: connectionDb,
    modelName: "Movie",
  }
);

export default Movie;