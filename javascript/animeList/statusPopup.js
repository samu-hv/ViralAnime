let editIcon = document.getElementsByClassName('table__icon');
console.log(editIcon)

var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

delay(function () {

    Array.from(editIcon).forEach(item => {
        item.addEventListener('click', function () {

            const title = item.parentNode.parentNode.childNodes[1].innerHTML;
            var id = item.parentNode.parentNode.childNodes[3].innerHTML;

            document.getElementById("popup__bg").classList.remove("popup__none");

            document.getElementsByClassName("popup__status__title")[0].innerHTML = title;
            document.getElementsByClassName("popup__status__id")[0].innerHTML = id;

            const status = item.parentNode.parentNode.parentNode.parentNode.id;

            //Imprimimos el estado actual del anime en el popup
            if (status == "table__th__watching") {
                document.getElementsByClassName("popup__status__currentlyStatus-par")[1].innerHTML = "Watching";
            }
            else if (status == "table__th__completed") {
                document.getElementsByClassName("popup__status__currentlyStatus-par")[1].innerHTML = "Completed";
            }
            else if (status == "table__th__onHold") {
                document.getElementsByClassName("popup__status__currentlyStatus-par")[1].innerHTML = "On Hold";
            }
            else if (status == "table__th__dropped") {
                document.getElementsByClassName("popup__status__currentlyStatus-par")[1].innerHTML = "Dropped";
            }
            else {
                document.getElementsByClassName("popup__status__currentlyStatus-par")[1].innerHTML = "Plan to Watch";
            }
        })
    })
}, 1000);


//Función para coger el estado del dropdown
function singleSelectChangeText() {
    var selObj = document.getElementById("singleSelectStatus");
    var selValue = selObj.options[selObj.selectedIndex].text;

    if (selValue != '-') {
        document.getElementById("popup__status__btn-accept").disabled = false;
    }
}

function closePopupStatus() {
    document.getElementById("popup__bg").classList.add("popup__none");
}
