
const HTMLResponseSearch = document.querySelector("#containerSearch");

searchSeries.addEventListener('click', () => {

    const searchValue = document.getElementsByClassName('search__input-series')[0].value;

    fetch(`${api_url}/anime?q=${searchValue}&page=1&order_by=score&sort=desc&type=tv`)
        .then(response => response.json())
        .then(animes => {
            const tpl = animes.data.map((anime) => `
                <div class="grid__shape">
                    <div class="grid__header">
                            <p class="grid__header__rank">#${anime.rank}</p>
                            <p class="grid__header__score">${anime.score}</p>
                    </div>
                    <img class="grid__img" src="${anime.images.jpg.image_url}">
                    <div class="grid__footer">
                        <div class="grid__footer__title">${anime.title}</div>
                        <div class="grid__footer-sub">
                            <div class="grid__footer__status">Edit status</div>
                            <span class="grid__footer__icon material-icons">edit</span>
                        </div>
                        <div class="grid__footer__id">${anime.mal_id}</div>
                    </div>
                </div>
            `).join('');
            HTMLResponseSearch.innerHTML = `
            <div class="grid">
                    ${tpl} 
            </div>
        `
        })
        .catch(err => console.error(err));

        openPopupInfo();
        editStatus();
        defineStatus();
        const removeContainer = document.getElementById('container').remove();
})

searchMovie.addEventListener('click', () => {

    const searchValue = document.getElementsByClassName('search__input-movies')[0].value;

    fetch(`${api_url}/anime?q=${searchValue}&page=1&order_by=score&sort=desc&type=movie`)
        .then(response => response.json())
        .then(animes => {
            const tpl = animes.data.map((anime) => `
                <div class="grid__shape">
                    <div class="grid__header">
                            <p class="grid__header__rank">#${anime.rank}</p>
                            <p class="grid__header__score">${anime.score}</p>
                    </div>
                    <img class="grid__img" src="${anime.images.jpg.image_url}">
                    <div class="grid__footer">
                        <div class="grid__footer__title">${anime.title}</div>
                        <div class="grid__footer-sub">
                            <div class="grid__footer__status">Edit status</div>
                            <span class="grid__footer__icon material-icons">edit</span>
                        </div>
                        <div class="grid__footer__id">${anime.mal_id}</div>
                    </div>
                </div>
            `).join('');
            HTMLResponseSearch.innerHTML = `
            <div class="grid">
                    ${tpl} 
            </div>
        `
        })
        .catch(err => console.error(err));

        openPopupInfo();
        editStatus();
        defineStatus();
        const removeContainer = document.getElementById('container').remove();
})

