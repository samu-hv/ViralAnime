const url = 'http://localhost:3000/api/viralAnime/'
const api_url = 'https://api.jikan.moe/v4'


var divName = document.getElementsByClassName('menu__btn-user');

const element = document.getElementById('table__th__watching');
const element1 = document.getElementById('table__th__completed');
const element2 = document.getElementById('table__th__onHold');
const element3 = document.getElementById('table__th__dropped');
const element4 = document.getElementById('table__th__plantoWatch');

const tbody = document.querySelector('tbody');

var userName = document.getElementsByClassName('cookie')[0].innerHTML;
document.getElementById('cookie').remove();

const mostrar = (animes) => {
    animes.forEach(anime => {
        if (anime.username == userName) {
            if (anime.status == 'Watching') {
                element.innerHTML += `   
                    <div class="table__card">
                        <div class="table__left">
                            <div class="table__title">${anime.title}</div>
                            <div class="table__idAnime">${anime.id_anime}</div>
                            <div class="table__left__stats">
                                <div class="table__score">${anime.score}</div>
                                <span class="table__icon material-icons">edit</span>
                            </div>
                        </div>
                        <img class="table__img" src="${anime.img}">
                    </div>
                    `
            }

            if (anime.status == 'Completed') {
                element1.innerHTML += `   
                    <div class="table__card">
                        <div class="table__left">
                            <div class="table__title">${anime.title}</div>
                            <div class="table__idAnime">${anime.id_anime}</div>
                            <div class="table__left__stats">
                                <div class="table__score">${anime.score}</div>
                                <span class="table__icon material-icons">edit</span>
                            </div>
                        </div>
                        <img class="table__img" src="${anime.img}">
                    `
            }

            if (anime.status == 'On Hold') {
                element2.innerHTML += `   
                    <div class="table__card">
                        <div class="table__left">
                            <div class="table__title">${anime.title}</div>
                            <div class="table__idAnime">${anime.id_anime}</div>
                            <div class="table__left__stats">
                                <div class="table__score">${anime.score}</div>
                                <span class="table__icon material-icons">edit</span>
                            </div>
                        </div>
                        <img class="table__img" src="${anime.img}">
                    `
            }

            if (anime.status == 'Dropped') {
                element3.innerHTML += `   
                    <div class="table__card">
                        <div class="table__left">
                            <div class="table__title">${anime.title}</div>
                            <div class="table__idAnime">${anime.id_anime}</div>
                            <div class="table__left__stats">
                                <div class="table__score">${anime.score}</div>
                                <span class="table__icon material-icons">edit</span>
                            </div>
                        </div>
                        <img class="table__img" src="${anime.img}">
                    `
            }

            if (anime.status == 'Plan to Watch') {
                element4.innerHTML += `   
                    <div class="table__card">
                        <div class="table__left">
                            <div class="table__title">${anime.title}</div>
                            <div class="table__idAnime">${anime.id_anime}</div>
                            <div class="table__left__stats">
                                <div class="table__score">${anime.score}</div>
                                <span class="table__icon material-icons">edit</span>
                            </div>
                        </div>
                        <img class="table__img" src="${anime.img}">
                    `
            }
        }
    })
}


fetch(url)
    .then(response => response.json())
    .then(data => mostrar(data))
    .catch(error => console.log(error))
