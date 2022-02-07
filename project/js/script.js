/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector(".promo__interactive-list");

    const form = document.querySelector('.add'),
          input = form.querySelector('.adding__input'),
          btnAdd = form.getElementsByTagName('button')[0],
          checkBox = form.getElementsByTagName('input')[1];

    const updateMovieList = () => {
        movieDB.movies.sort();
        movieList.innerHTML = '';
        movieDB.movies.forEach((film, index) => {
            movieList.innerHTML += `
            <li class="promo__interactive-item">${index + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        // удаление фильма при клике на корзину
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                updateMovieList();
            });
        });
    };

    const deleteAdv = arr => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    // добавление нового фильма
    const addNewFilm = filmTitle => {
        if (filmTitle.length == 0) {
            alert('Введите название фильма!');
            return;
        }
        if (filmTitle.length > 21) {
            filmTitle = filmTitle.slice(0, 21);
            filmTitle += '...';
        }
        if (checkBox.checked) {
            console.log('Добавляем любимый фильм');
        }
        movieDB.movies.push(filmTitle);
        updateMovieList();
    };

    btnAdd.addEventListener('click', (e) => {
        e.preventDefault();
        addNewFilm(input.value);
        form.reset();
    });

    deleteAdv(adv);
    makeChanges();
    updateMovieList();
});