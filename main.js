"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
if (isNaN(+numberOfFilms)) {
    alert("Произошла ошибка");
} else {
    if (numberOfFilms < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        alert("Вы классический зритель");
    } else {
        alert("Вы киноман");
    }
}

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const films = [];
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
console.log(personalMovieDB);