import { DataTypes, Model } from "sequelize";
import connectionDb from "../connection/connectionDb.js";

class Movie extends Model{}

Movie.init({
  id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
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
    allowNull: false,
    defaultValue: 0
  },
  precio: {
    type: DataTypes.DOUBLE,
    allowNull:false
  }

  },
  {
    sequelize: connectionDb,
    modelName: "Movie",
  }
);

export default Movie;