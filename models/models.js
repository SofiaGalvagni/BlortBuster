import Movie from "./Movie.js";
import User from "./User.js";
import Booking from "./Booking.js";


// Booking.hasOne(Movie)
// Movie.belongsToMany(Booking)

// Booking.hasOne(User)
// User.belongsToMany(Booking)

User.belongsToMany(Movie, { through: Booking, foreignKey: 'userId' });
Movie.belongsToMany(User, { through: Booking, foreignKey: 'movieId' });


// Movie.hasMany(Booking, { foreignKey: 'movieId' });
// Booking.belongsTo(Movie, { foreignKey: 'movieId' });
// User.hasMany(Booking, { foreignKey: 'userId' });
// Booking.belongsTo(User, { foreignKey: 'userId' });


export default {User, Movie, Booking}