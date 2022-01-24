"use strict";

const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start : function() {
        personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count.length == 0 || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    detectPersonalLevel : function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else {
            alert("Вы киноман");
        }
    },
    rememberFilms : function() {
        for (let i = 0; i < 2; i++) {
            const film = {
                title : prompt("Один из последних просмотренных фильмов?", ""),
                rating : prompt("На сколько оцените его?", "")
            };
            if (film.title == null || film.title.length == 0 || film.title.length > 50) {
                i--;
            } else {
                personalMovieDB.movies[film.title] = film.rating;
            }
        }
    },
    showMyDB : function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres : function() {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
            if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i].length == 0) {
                i--;
            }
        }

        personalMovieDB.genres.forEach((currentItem, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${currentItem}`);
        });
    },
    toggleVisibleMyDB : function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberFilms();
personalMovieDB.writeYourGenres();


// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();