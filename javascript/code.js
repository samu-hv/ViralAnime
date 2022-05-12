//Definición de variables
const url = 'http://localhost:3000/api/viralAnime/'

const cards = document.getElementsByClassName('card_id');

var userName = document.getElementsByClassName('cookie')[0].innerHTML;
document.getElementById('cookie').remove()


var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

delay(function () {
    var idCards = [];

    //Pushea todos los id de todas las cards en idCards
    for (var i = 0; i < cards.length; i++) {
        idCards.push(cards[i].innerHTML);
    }

    const resultadosId = []
    const resultadosStatus = []
    const resultadosUsername = []
    let print = ''

    //Guardamos valores de la base de datos en arrays
    const mostrar = (animes) => {
        animes.forEach(anime => {
            resultadosId.push(anime.id_anime);
            resultadosStatus.push(anime.status);
            resultadosUsername.push(anime.username);
        })

        //Imprimimos el estado del anime
        for (var i = 0; i < idCards.length; i++) {
            for (var j = 0; j < resultadosId.length; j++) {
                if (idCards[i] == resultadosId[j] && resultadosUsername[j] == userName) {
                    print = `<p>${resultadosStatus[j]}</p>`
                    cards[i].previousElementSibling.innerHTML = print
                }
            }
        }
    }

    fetch(url)
        .then(response => response.json())
        .then(data => mostrar(data))
        .catch(error => console.log(error))


    const on = (element, event, selector, handler) => {
        element.addEventListener(event, e => {
            if (e.target.closest(selector)) {
                handler(e)
            }
        })
    }

    //Recoge la información si se hace click en un input
    on(document, 'click', '#radioStatus', e => {
        var status = document.getElementsByClassName('radioCall');
        var status_value;

        var id = document.getElementsByClassName('card_id');

        const activeCard = document.querySelector('[data-active]')

        const activeStatus = activeCard.firstChild.nextSibling.childNodes[7].firstChild.innerHTML;
        var title = activeCard.firstChild.nextSibling.childNodes[1].innerHTML;
        var img = activeCard.childNodes[3].firstChild.nextSibling.firstChild.nextSibling.src;
        var score = activeCard.firstChild.nextSibling.childNodes[3].childNodes[3].childNodes[3].innerHTML;

        //Comprueba el input checked. coje su valor y la card ID
        for (var i = 0; i < status.length; i++) {
            if (status[i].checked) {
                const idSelect = status[i].parentNode.parentNode.previousSibling.previousSibling.innerHTML;
                id.value = idSelect
                status_value = status[i].value;
            }
        }

        const resultadosPostId = []
        const resultadosPostUsername = []
        const resultadosPostIdAnime = []

        //Guardamos valores de la base de datos en arrays
        const mostrar = (animes) => {
            animes.forEach(anime => {
                resultadosPostId.push(anime.id);
                resultadosPostIdAnime.push(anime.id_anime)
                resultadosPostUsername.push(anime.username);
            })

            //Si la card no tiene estado hace POST, sino PUT
            if (activeStatus === 'Add to list:') {
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        status: status_value,
                        idAnime: id.value,
                        userName: userName,
                        title: title,
                        img: img,
                        score: score
                    })
                })
                    .then(response => response.json())
                    .then(response => location.reload())
            }
            else {
                for (var i = 0; i < resultadosPostId.length; i++) {
                    let idList = resultadosPostId[i];
                    if (resultadosPostIdAnime[i] == id.value && resultadosPostUsername[i] == userName) {
                        fetch(url + idList, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                id: idList,
                                status: status_value,
                            })
                        })
                            .then(response => response.json())
                            .then(response => location.reload())
                    }
                }
            }
        }

        fetch(url)
            .then(response => response.json())
            .then(data => mostrar(data))
            .catch(error => console.log(error))
    })

    on(document, 'click', '#radioStatus1', e => {
        var status = document.getElementsByClassName('radioCall');
        var status_value;

        var id = document.getElementsByClassName('card_id');

        const activeCardTwo = document.querySelector('[data-active-two]')
        const activeStatusTwo = activeCardTwo.firstChild.nextSibling.childNodes[7].firstChild.innerHTML;

        var title = activeCardTwo.firstChild.nextSibling.childNodes[1].innerHTML;

        var img = activeCardTwo.childNodes[3].firstChild.nextSibling.firstChild.nextSibling.src;

        var score = activeCardTwo.firstChild.nextSibling.childNodes[3].childNodes[3].childNodes[3].innerHTML;

        //Comprueba el input checked. coje su valor y la card ID
        for (var i = 0; i < status.length; i++) {
            if (status[i].checked) {
                const idSelect = status[i].parentNode.parentNode.previousSibling.previousSibling.innerHTML;
                id.value = idSelect
                status_value = status[i].value;
            }
        }

        const resultadosPostId = []
        const resultadosPostUsername = []
        const resultadosPostIdAnime = []

        //Guardamos valores de la base de datos en arrays
        const mostrar = (animes) => {
            animes.forEach(anime => {
                resultadosPostId.push(anime.id);
                resultadosPostIdAnime.push(anime.id_anime)
                resultadosPostUsername.push(anime.username);
            })

            //Si la card no tiene estado hace POST, sino PUT
            if (activeStatusTwo === 'Add to list:') {
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        status: status_value,
                        idAnime: id.value,
                        userName: userName,
                        title: title,
                        img: img,
                        score: score
                    })
                })
                    .then(response => response.json())
                    .then(response => location.reload())
            }
            else {
                for (var i = 0; i < resultadosPostId.length; i++) {
                    let idList = resultadosPostId[i];
                    if (resultadosPostIdAnime[i] == id.value && resultadosPostUsername[i] == userName) {
                        fetch(url + idList, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                id: idList,
                                status: status_value,
                            })
                        })
                            .then(response => response.json())
                            .then(response => location.reload())
                    }
                }
            }
        }
        fetch(url)
            .then(response => response.json())
            .then(data => mostrar(data))
            .catch(error => console.log(error))
    })
}, 700);