function acceptStatus() {
    const url = 'http://localhost:3000/api/viralAnime/'
    const urlStatus = 'http://localhost:3000/api/';

    const on = (element, event, selector, handler) => {
        element.addEventListener(event, e => {
            if (e.target.closest(selector)) {
                handler(e)
            }
        })
    }

    on(document, 'click', ".popup__status__btn-accept", e => {
        const element = document.getElementById("singleSelectStatus");

        const statusVal = element.options[element.selectedIndex].text;

        const idAnime = document.getElementsByClassName("popup__status__id")[0].innerHTML;
        const currentStatus = document.getElementsByClassName("popup__status__currentlyStatus-par")[1].innerHTML;
        const title = document.getElementsByClassName("popup__status__title")[0].innerHTML;
        const img = document.getElementsByClassName("popup__status__img")[0].src;
        const score = document.getElementsByClassName("popup__status__score")[0].innerHTML;


        if (currentStatus != '') {
            fetch(urlStatus + userName, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: statusVal,
                    idAnime: idAnime,
                    username: userName
                })
            })
            .then(response => location.reload())
        }
        else {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: statusVal,
                    idAnime: idAnime,
                    userName: userName,
                    title: title,
                    img: img,
                    score: score
                })
            })
            .then(response => location.reload())
        }
        document.getElementById("popup__bg").classList.add("popup__none");
    })
}


