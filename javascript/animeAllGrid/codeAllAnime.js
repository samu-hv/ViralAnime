var userName = document.getElementsByClassName('cookie')[0].innerHTML;
document.getElementById('cookie').remove()

function defineStatus () {
    var delay = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();
    
    delay(function () {
    
    const url = 'http://localhost:3000/api/viralAnime/'
    
    const titleAnimes = document.getElementsByClassName('grid__footer__title')
    // const titleAnimes = [];
    // titleAnimes.push(animes.innerHTML)
    console.log(titleAnimes.length)
    
    const mostrar = (animes) => {
        animes.forEach(anime => {
            if (anime.username == userName) {
                if (anime.status == 'Watching') {
                    for (var i = 0; i < titleAnimes.length; i++) {
                        if (anime.title == titleAnimes[i].innerHTML) {
                            document.getElementsByClassName('grid__footer__status')[i].innerHTML = "Watching"
                        }
                    }
                }
                else if (anime.status == 'Completed') {
                    for (var i = 0; i < titleAnimes.length; i++) {
                        if (anime.title == titleAnimes[i].innerHTML) {
                            document.getElementsByClassName('grid__footer__status')[i].innerHTML = "Completed"
                        }
                    }
                }
                else if (anime.status == 'On Hold') {
                    for (var i = 0; i < titleAnimes.length; i++) {
                        if (anime.title == titleAnimes[i].innerHTML) {
                            document.getElementsByClassName('grid__footer__status')[i].innerHTML = "On Hold"
                        }
                    }
                }
                else if (anime.status == 'Dropped') {
                    for (var i = 0; i < titleAnimes.length; i++) {
                        if (anime.title == titleAnimes[i].innerHTML) {
                            document.getElementsByClassName('grid__footer__status')[i].innerHTML = "Dropped"
                        }
                    }
                }
                else {
                    for (var i = 0; i < titleAnimes.length; i++) {
                        if (anime.title == titleAnimes[i].innerHTML) {
                            document.getElementsByClassName('grid__footer__status')[i].innerHTML = "Plan to Watch"
                        }
                    }
                }
            }
        })
    }
    
    
    fetch(url)
        .then(response => response.json())
        .then(data => mostrar(data))
        .catch(error => console.log(error))
    
    }, 1000);
}

