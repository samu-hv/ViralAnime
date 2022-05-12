
const api_url = "https://api.jikan.moe/v4";

const HTMLResponse = document.querySelector("#container");

var index = 1;

function showAnime() {
    fetch(`${api_url}/top/anime?page=${index}`)
        .then(response => response.json())
        // .then(response => console.log(response))
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
            HTMLResponse.innerHTML = `
        <div class="grid">
                ${tpl} 
        </div>

    `
        })
        .catch(err => console.error(err));
}

function allFunctions() {
    showAnime();
    defineStatus();
    openPopupInfo();
    editStatus();
    singleSelectChangeText();
    acceptStatus();
    closePopupStatus();
}
allFunctions();


prev.addEventListener('click', () => {
    if (index >= 2) {
        index -= 1;
        console.log(index);
        allFunctions()
        window.scroll(0, 0);
        document.getElementsByClassName("pagination__number")[0].innerHTML = index;
    }
    if (index === 1) {
        document.getElementById("prev").classList.add('pagination__span-disabled');
    }
})

next.addEventListener('click', () => {
    index += 1;
    console.log(index);
    allFunctions()
    document.getElementById("prev").classList.remove("pagination__span-disabled");
    window.scroll(0, 0);
    document.getElementsByClassName("pagination__number")[0].innerHTML = index;
})