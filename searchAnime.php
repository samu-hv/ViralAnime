<?php
// seguridad de sesiones de paginación
session_start();
error_reporting(0);
// ¿con cookies o sin cookies?
if (isset($_COOKIE["username"])) {
    $varsesion = $_COOKIE["username"];
} else {
    $varsesion = $_SESSION['user'];
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- font-family -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="css/style.css">
    <link rel="Shortcut Icon" type="image/png" href="img/logo/logo-cut.png">

    <title>Viral Anime</title>
</head>

<body>
    <header id="header__list" class="header__list">
        <div id="cookie" class="cookie"><?php echo $_SESSION['user']; ?></div>
        <a href="index.php">
            <img src="img/logo/logo-cut.png" alt="#" class="header__list-logo">
        </a>

        <div class="menu">
            <?php
            if (isset($_COOKIE["user"])) : ?>
                <div class="menu__btn-user"><?php echo $_SESSION['user']; ?><span class="menu__btn-arrow material-icons">arrow_left</span></div>
                <a href="logout.php" class="menu__btn-register menu__btn-register-logout">LogOut</a>
                <a href="animeList.php" class="menu__btn-list-2">Anime List</a>
                <a href="searchAnime.php" class="menu__btn-search-2">Search Anime</a>

            <?php elseif (isset($_SESSION['user'])) : ?>
                <div class="menu__btn-user"><?php echo $_SESSION['user']; ?><span class="menu__btn-arrow material-icons">arrow_left</span></div>
                <a href="logout.php" class="menu__btn-register menu__btn-register-logout">LogOut</a>
                <a href="animeList.php" class="menu__btn-list-2">Anime List</a>
                <a href="searchAnime.php" class="menu__btn-search-2">Search Anime</a>

            <?php else : ?>
                <div class="menu__btn-bg"></div>
                <a href="login.php" class="menu__btn-login">Log In</a>
                <a href="register.html" class="menu__btn-register">Sign Up</a>
            <?php endif; ?>
        </div>
    </header>

    <div class="search">
        <div class="search__series">
            <h2 class="search__title">Search Anime SERIES</h2>
            <div class="search__shape">
                <input placeholder="Search..." type="text" class="search__input search__input-series" value="">
                <span id="searchSeries" class="search__icon material-icons">search</span>
            </div>
        </div>

        <div class="search__movie">
            <h2 class="search__title">Search Anime MOVIES</h2>
            <div class="search__shape">
                <input placeholder="Search..." type="text" class="search__input search__input-movies" value="">
                <span id="searchMovie" class="search__icon material-icons">search</span>
            </div>
        </div>
    </div>


    <div class="containerSearch" id="containerSearch"></div>
    <div class="container" id="container"></div>
    <div class="popup" id="popup"></div>
    
    <div class="pagination">
        <span id="prev" class="pagination__prev pagination__span-disabled material-icons">west</span>
        <div class="pagination__number">1</div>
        <span id="next" class="pagination__next material-icons">east</span>
    </div>

    <section id="popup__bg" class="popup__bg popup__none">
        <div class="popup__status">
            <div class="popup__status__shape">
                <h2 class="popup__status__title"></h2>
                <div class="popup__status__id"></div>
                <img class="popup__status__img" src="" alt="#">
                <div class="popup__status__score"></div>
                <div class="popup__status__currentlyStatus">
                    <p class="popup__status__currentlyStatus-par">Currently Status:</p>
                    <p class="popup__status__currentlyStatus-par"></p>
                </div>
                <div class="popup__status__center">
                    <select id="singleSelectStatus" class="popup__status__control" onchange="singleSelectChangeText()">
                        <option class="popup__none" value="-">-</option>
                        <option value="">Watching</option>
                        <option value="">Completed</option>
                        <option value="">On Hold</option>
                        <option value="">Dropped</option>
                        <option value="">Plan to Watch</option>
                    </select>
                </div>
                <div id="popup__status__msgErr" class="popup__status__msgErr">Please, select a status to update it</div>
                <div class="popup__status__center">
                    <button id="popup__status__btn-accept" class="popup__status__btn popup__status__btn-accept" disabled>Accept</button>
                    <button class="popup__status__btn popup__status__btn-cancel" onclick="closePopupStatus()">Cancel</button>
                </div>
            </div>
        </div>
    </section>
</body>

</html>



<script src="javascript/animeAllGrid/codeAllAnime.js"></script>
<script src="javascript/animeAllGrid/statusPopup.js"></script>
<script src="javascript/animeAllGrid/codePopup.js"></script>
<script src="javascript/animeAllGrid/popup.js"></script>
<script src="javascript/animeAllGrid/allAnime.js"></script>


<script src="javascript/animeSearch/searchAnime.js"></script>