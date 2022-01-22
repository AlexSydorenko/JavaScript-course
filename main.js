"use strict";

let numberOfFilms;

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function start() {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms.length == 0 || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

function detectPersonalLevel () {
    if (numberOfFilms < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        alert("Вы классический зритель");
    } else {
        alert("Вы киноман");
    }
}
detectPersonalLevel();

const films = [];
function rememberFilms() {
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
}
rememberFilms();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
    }
}
writeYourGenres();