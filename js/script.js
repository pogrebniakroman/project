
const numberOfFilms = +prompt('How many films you watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One is last watched film', ''),
      b = prompt('How you value film?', ''),
      c = prompt('One is last watched film', ''),
      d = prompt('How you value film?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
