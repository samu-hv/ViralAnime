var urlComments = 'http://localhost:3000/api/comment'

var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

delay(function () { 
    const on = (element, event, selector, handler) => {
        element.addEventListener(event, e => {
            if (e.target.closest(selector)) {
                handler(e)
            }
        })
    }

    on(document, 'click', '#addComment', e => {
        const comment = document.getElementById('popup__textarea').value
        const idPopup = document.getElementById('popup__id').innerHTML

            if (comment != '') {
                fetch(urlComments, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        comment: comment,
                        idAnime: idPopup,
                        userName: userName
                    })
                })
                    // .then(response => response.json())
                    .then(response => location.reload())
            }
        fetch(urlComments)
            .then(response => response.json())
            .catch(error => console.log(error))
    })

    
    const idPopup = document.getElementById('popup__id').innerHTML
    const popupComment = document.getElementById('popup__comments')

    document.getElementsByClassName("popup__form__name-user")[0].innerHTML = userName
    console.log(userName)

    resultadosComment = [];
    resultadosIdAnime = [];
    resultadosUsername = [];
    let print = ''

    const mostrar = (comments) => {
        comments.forEach(comment => {
            resultadosComment.push(comment.comment);
            resultadosIdAnime.push(comment.id_anime);
            resultadosUsername.push(comment.username);
        })

        //Imprimimos los comentarios
        for (var i = resultadosComment.length; i >= 0; i--) {
                if (idPopup == resultadosIdAnime[i]) {
                    print = `
                    <div class="popup__comments__user">${resultadosUsername[i]}</div>
                    <div class="popup__comments__comment">${resultadosComment[i]}</div>
                    <hr class="popup__comments__hr">
                    `
                    popupComment.innerHTML += print
                }
        }
    }
    
    fetch(urlComments)
        .then(response => response.json())
        .then(data => mostrar(data))
        .catch(error => console.log(error))

}, 1500);