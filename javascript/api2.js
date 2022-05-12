const HTMLResponseTwo = document.querySelector("#container-two");

//Imprimimos los animes que de la season a través de la api
fetch(`${api_url}/seasons/now`)
    .then(response => response.json())
    .then(animes => {
        const tpl = animes.data.map((anime) => `
        <div id="card__main__season" class="card__main__season">
            <div class="card__left">
                <div class="card__left-title card__left-title-season">${anime.title}</div>
                <div class="card__left__info">
                    <div class="card__left__info-flex card__left__info-rank">
                        <span class="card__left__info-icon material-icons">workspace_premium</span>
                        <p class="card__left__info-paragraph card__left__info-paragraph-rank">${anime.rank}</p>
                    </div>
                    <div class="card__left__info-flex card__left__info-score">
                        <span class="card__left__info-icon material-icons">star_outline</span>
                        <p class="card__left__info-paragraph">${anime.score}</p>
                    </div>
                    <div class="card__left__info-flex card__left__info-year">
                        <p class="card__left__info-paragraph-2">${anime.year}</p>
                    </div>
                    <div class="card__left__info-flex card__left__info-ep">
                        <p class="card__left__info-paragraph-2">EP. ${anime.episodes}</p>
                    </div>
                </div>
                <div class="card__left-synopsis">${anime.synopsis}</div>
                <div class="estado" id="estado"><p>Add to list:</p></div>
                <div class="card_id">${anime.mal_id}</div>
                <form>
                    <label class="checkbox">
                        <input id="radioStatus1" class="radioStatus1 radioCall" type="radio" value="Watching" name="status">Watching
                    </label>
                    <label class="checkbox">
                        <input id="radioStatus1" class="radioStatus2 radioCall" type="radio" value="Completed" name="status">Completed
                    </label>
                    <label class="checkbox">
                        <input id="radioStatus1" class="radioStatus3 radioCall" type="radio" value="On Hold" name="status">On Hold
                    </label>
                    <br>
                    <label class="checkbox">
                        <input id="radioStatus1" class="radioStatus4 radioCall" type="radio" value="Dropped" name="status">Dropped
                    </label>
                    <label class="checkbox">
                        <input id="radioStatus1" class="radioStatus5 radioCall" type="radio" value="Plan to Watch" name="status">Plan to Watch
                    </label>
                </form>
            </div>
            <div class="card__right">
                <div class="card__right__bg"> 
                    <img class="card__right__img" src="${anime.images.jpg.image_url}">
                </div>
            </div>
            <div class="card__bootom">
            </div>
        </div>
        `).join('');

        HTMLResponseTwo.innerHTML = `
        <div data-carousel>
            <button class="carousel-button prev" data-carousel-button-two="prev">&#171;</button>
            <button class="carousel-button next" data-carousel-button-two="next">&#187;</button>
            <div class="card" data-slides>
                ${tpl} 
            </div>
        </div>
    `
    })
.catch(err => console.error(err));
