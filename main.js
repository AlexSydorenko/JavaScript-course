"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const filmTitle = prompt("Один из последних просмотренных фильмов?", "");
const filmRating = prompt("На сколько оцените его?", "");
personalMovieDB.movies = {
    filmTitle : filmRating
};

console.log(`${filmTitle} ${filmRating}`);