/* 
  'use strict';
 let numberOfFilms ;

 function start(){
numberOfFilms = +prompt('How match film you movie', '');

while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('How match film you movie', '');
}

 }

 start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
 };

   function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt('One is last watched film', ''),
             b = prompt('How you value film?', '');
       
             if(a != null && b != null && a != '' && b != '' && a.length < 50){
                 personalMovieDB.movies[a] = b;
                 console.log('done');
             } else {
                 console.log('error');
                 i--;
             }
          }
   }

  //rememberMyFilms();

   function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Movies litle films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You classic viewer');
    } else if (personalMovieDB.count >=30) {
        console.log('You kinoman');
    } else{
        console.log('An error has occured');
    }
   }

//    detectPersonalLevel();

   function showMyDB(hidden){
       if(!hidden){
           console.log(personalMovieDB);
       }
   }
   showMyDB(personalMovieDB.privat);

   function writeYourGenres(){
       for(let i = 1; i <=3; i++){
           const genre = prompt(`You love genre is numbered ${i}`);
           personalMovieDB.genres[i-1] = genre;
       }
       }
       writeYourGenres();

 */

     //  "use strict";
/* 
       function first(){
           setTimeout(function(){
               console.log(1);
           }, 500);
       }

       function second(){
           console.log(2);
       }

       first();
       second();

       function learnJS(lang, callback){
           console.log(`I learning: ${lang}`);
           callback();
       }

       function done(){
        console.log('I go it lesson');
       }

       learnJS('JavaScript', done); */

      /*  "use strict";

       const options = {
           name: 'test',
           width: 1024,
           height: 1024,
           colors:{
               border: 'black',
               bg: 'red'
           }
       };

       console.log(options.name);

       delete options.name;

       console.log(options);

       for(let key in options){
           console.log(`Property ${key} have value ${options[key]}`);
       } */

       "use strict";

       const options = {
           name: 'test',
           width: 1024,
           height: 1024,
           colors:{
               border: 'black',
               bg: 'red'
           },
           makeTest: function(){
               console.log('Test');
           }

       };

       options.makeTest();

       const {border, bg} = options.colors;

       console.log(border, bg);

    //    console.log(Object.keys(options).length);

    //    console.log(options.name);

    //    delete options.name;

    //    console.log(options);

    //    let counter = 0;

    //    for(let key in options){
    //        console.log(`Property ${key} have value ${options[key]}`);
    //        counter++;
    //    }

    //    console.log(counter);

