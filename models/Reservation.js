import { DataTypes, Model } from "sequelize";
import connectionDb from '../connection/connectionDb.js';  

class Reservation extends Model{}

Reservation.init({
    movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Movie',  
            key: 'id'
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',  
            key: 'id'
        }
    },
    reservedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
},
{
  sequelize: connectionDb,
  modelName: "Reservation",
}
);

export default Reservation;
