
// const numberOfFilms = +prompt('How many films you watch?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('One is last watched film', ''),
//       b = prompt('How you value film?', ''),
//       c = prompt('One is last watched film', ''),
//       d = prompt('How you value film?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

  "use strict";

 if(4==4){
     console.log('Ok');
 } else{
     console.log('Error');
 }
 const num = 50;

 if(num < 49){
     console.log('Error');
 }else if (num > 100){
     console.log('Many');
 } else{
     console.log('Ok!');
 }

 (num == 50) ? console.log('Ok!') : console.log('Error');

 switch(num){
     case 49:
         console.log('Incorrect');
         break;

         case 100:
         console.log('Incorrect');
         break;

         case 50:
         console.log('Correct');
         break;
         default:
             console.log('All values incorrect');
             break;
 }