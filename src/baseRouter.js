const User = require("./routers/userRouter");
const Movie = require('./routers/movieRouter');
const userMovie = require('./routers/userMovieRouter');

module.exports = function (app) {
    app.use("/User", User);
    app.use('/Movie', Movie);
    app.use('/userMovie', userMovie)
};