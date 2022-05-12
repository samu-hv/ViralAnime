function editStatus () {
    let editIcon = document.getElementsByClassName('grid__footer__icon');

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
                console.log("asdf")
    
                var title = item.parentNode.parentNode.childNodes[1].innerHTML
                var id = item.parentNode.parentNode.childNodes[5].innerHTML;
                var img = item.parentNode.parentNode.parentNode.childNodes[3].src
                var score = item.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML
    
                document.getElementById("popup__bg").classList.remove("popup__none");
    
                document.getElementsByClassName("popup__status__title")[0].innerHTML = title;
                document.getElementsByClassName("popup__status__id")[0].innerHTML = id;
                document.getElementsByClassName("popup__status__img")[0].src = img;
                document.getElementsByClassName("popup__status__score")[0].innerHTML = score;
    
                const status = item.parentNode.childNodes[1].innerHTML
    
                if (status == "Watching") {
                    document.getElementsByClassName("popup__status__currentlyStatus-par")[1].innerHTML = "Watching";
                }
                else if (status == "Completed") {
                    document.getElementsByClassName("popup__status__currentlyStatus-par")[1].innerHTML = "Completed";
                }
                else if (status == "On Hold") {
                    document.getElementsByClassName("popup__status__currentlyStatus-par")[1].innerHTML = "On Hold";
                }
                else if (status == "Dropped") {
                    document.getElementsByClassName("popup__status__currentlyStatus-par")[1].innerHTML = "Dropped";
                }
                else if (status == "Plan to Watch") {
                    document.getElementsByClassName("popup__status__currentlyStatus-par")[1].innerHTML = "Plan to Watch";
                }
            })
        })
    }, 1000);
}

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
