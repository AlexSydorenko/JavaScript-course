"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const films = [prompt("Один из последних просмотренных фильмов?", ""), prompt("На сколько оцените его?", ""),
                prompt("Один из последних просмотренных фильмов?", ""), prompt("На сколько оцените его?", "")];
personalMovieDB.movies[films[0]] = films[1];
personalMovieDB.movies[films[2]] = films[3];

console.log(personalMovieDB);