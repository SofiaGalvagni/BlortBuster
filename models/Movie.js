import { DataTypes, Model } from "sequelize";
import connectionDb from "../connection/connectionDb.js";

class Movie extends Model{}

Movie.init({
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
  },
  {
    sequelize: connectionDb,
    modelName: "Movie",
  }
);

export default Movie;