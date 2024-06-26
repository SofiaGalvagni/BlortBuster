import Movie from "./Movie";
import User from "./User";
import Booking from "./Booking";


Booking.hasOne(Movie)
Movie.belongsToMany(Booking)

Booking.hasOne(User)
User.belongsToMany(Booking)

export {User, Movie, Booking}