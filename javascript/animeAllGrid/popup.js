function openPopupInfo() {
    var delay = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    delay(function () {

        const divCardsGrid = document.getElementsByClassName("grid__img");

        const localStorageIdCard = localStorage.getItem("localStorageIdCard")

        if (localStorageIdCard != null) {
            document.body.classList.add('stop-scrolling')

            var script = document.createElement("script");
            script.src = "javascript/popup/codeComments.js";
            script.id = "comments"
            document.documentElement.firstChild.appendChild(script);

            fetch(`${api_url}/anime/${localStorageIdCard}`)
                .then(response => response.json())
                .then(anime => {
                    const length = anime.data.genres.length;
                    const genreArray = [];

                    for (i = 0; i < length; i++) {
                        genreArray.push(anime.data.genres[i].name)
                    }

                    const genres = genreArray.map((genre) => `
                            <p class="popup__content__left__genre-name">${genre}</p>
                        `).join('')

                    const element = document.getElementById('popup')
                    element.innerHTML = `
                            <div id="popup__bg" class="popup__bg">
                                <div class="popup__shape">
                                    <div class="popup__header">
                                        <div class="popup__stats">
                                            <div class="popup__stats-score">
                                                <p class="popup__stats-score-1">Score</p>
                                                <p class="popup__stats-score-2">${anime.data.score}</p>
                                                <p class="popup__stats-score-3">${anime.data.scored_by} users</p>
                                            </div>
                                            <div class="popup__stats-rank">Rank #${anime.data.rank}</div>
                                            <div class="popup__stats-pop">Popularity #${anime.data.popularity}</div>
                                            <div class="popup__stats-members">Members ${anime.data.members}</div>
                                        </div>
                                    </div>
                                    <div class="popup__content">
                                        <div class="popup__content__left">
                                            <div class="popup__content__left-1"></div>
                                            <div class="popup__content__left__img-bg">
                                                <img class="popup__content__left__img" src="${anime.data.images.jpg.image_url}">
                                            </div>
                                            <div class="popup__content__left-2"></div>
                                            <div class="popup__content__left__genre">
                                                <div class="popup__content__left__genre-shape">
                                                    ${genres}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup__content__right">
                                            <h2 class="popup__content__title">
                                                ${anime.data.title}
                                            </h2>
                                            <div class="popup__content__synopsis">
                                                <p>${anime.data.synopsis}</p>
                                            </div>
                                            <div id="popup__id" class="popup__content__id">${anime.data.mal_id}</div>
                                            <div class="popup__form">
                                                <div class="popup__form__name-user"></div>
                                                <textarea id="popup__textarea" class='popup__form-textarea autoExpand' rows='3' data-min-rows='3' placeholder='Add a comment' autofocus></textarea>
                                                <button id="addComment" class="popup__form__add">Comment</button>
                                            </div>
                                            <div id="popup__comments" class="popup__comments"></div>
                                        </div>
                                    </div>
                                </div>
                                <span id="popup__close" class="material-icons popup__close">close</span>
                            </div>
                        `

                    //Close popup
                    document.getElementById('popup__close').addEventListener('click', function () {
                        document.body.classList.remove('stop-scrolling')
                        const popup = document.getElementById('popup')
                        localStorage.removeItem("localStorageIdCard");
                        while (popup.firstChild) {
                            popup.firstChild.remove();
                        }
                    });
                })
                .catch(err => console.error(err));
        }


        Array.from(divCardsGrid).forEach(item => {
            item.addEventListener('click', function () {

                //Llamamos al script que muestra los comentarios
                var script = document.createElement("script");
                script.src = "javascript/popup/codeComments.js";
                script.id = "comments"
                document.documentElement.firstChild.appendChild(script);

                //Eliminamos scroll de la página principal
                document.body.classList.add('stop-scrolling')

                const idCard = item.parentNode.childNodes[5].childNodes[5].innerHTML

                localStorage.setItem("localStorageIdCard", idCard);

                fetch(`${api_url}/anime/${idCard}`)
                    .then(response => response.json())
                    .then(anime => {

                        const length = anime.data.genres.length;
                        const genreArray = [];
                        for (i = 0; i < length; i++) {
                            genreArray.push(anime.data.genres[i].name)
                        }

                        const genres = genreArray.map((genre) => `
                            <p class="popup__content__left__genre-name">${genre}</p>
                        `).join('')

                        const element = document.getElementById('popup')
                        element.innerHTML = `
                            <div id="popup__bg" class="popup__bg">
                                <div class="popup__shape">
                                    <div class="popup__header">
                                        <div class="popup__stats">
                                            <div class="popup__stats-score">
                                                <p class="popup__stats-score-1">Score</p>
                                                <p class="popup__stats-score-2">${anime.data.score}</p>
                                                <p class="popup__stats-score-3">${anime.data.scored_by} users</p>
                                            </div>
                                            <div class="popup__stats-rank">Rank #${anime.data.rank}</div>
                                            <div class="popup__stats-pop">Popularity #${anime.data.popularity}</div>
                                            <div class="popup__stats-members">Members ${anime.data.members}</div>
                                        </div>
                                    </div>
                                    <div class="popup__content">
                                        <div class="popup__content__left">
                                            <div class="popup__content__left-1"></div>
                                            <div class="popup__content__left__img-bg">
                                                <img class="popup__content__left__img" src="${anime.data.images.jpg.image_url}">
                                            </div>
                                            <div class="popup__content__left-2"></div>
                                            <div class="popup__content__left__genre">
                                                <div class="popup__content__left__genre-shape">
                                                    ${genres}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup__content__right">
                                            <h2 class="popup__content__title">
                                                ${anime.data.title}
                                            </h2>
                                            <div class="popup__content__synopsis">
                                                <p>${anime.data.synopsis}</p>
                                            </div>
                                            <div id="popup__id" class="popup__content__id">${anime.data.mal_id}</div>
                                            <div class="popup__form">
                                                <div class="popup__form__name-user"></div>
                                                <textarea id="popup__textarea" class='popup__form-textarea autoExpand' rows='3' data-min-rows='3' placeholder='Add a comment' autofocus></textarea>
                                                <button id="addComment" class="popup__form__add">Comment</button>
                                            </div>
                                            <div id="popup__comments" class="popup__comments"></div>
                                        </div>
                                    </div>
                                </div>
                                <span id="popup__close" class="material-icons popup__close">close</span>
                            </div>
    
                            <script src="javascript/popup/codeComments.js" defer></script>
    
                        `

                        //Cerramos el popup
                        document.getElementById('popup__close').addEventListener('click', function () {
                            document.body.classList.remove('stop-scrolling');
                            const comments = document.getElementById('comments');
                            comments.remove();
                            urlComments = '';
                            const popup = document.getElementById('popup');
                            localStorage.removeItem("localStorageIdCard");
                            while (popup.firstChild) {
                                popup.firstChild.remove();
                            }
                        });
                    })
                    .catch(err => console.error(err));
            })
        })
    }, 1000);
}

