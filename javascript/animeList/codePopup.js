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

    if (statusVal != '-') {
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
            .then(response => response.json())
            .then(response => location.reload())
    }
})

