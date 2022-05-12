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

include "blogLogic.php";
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
    <header id="header" class="header">
        <div id="cookie" class="cookie"><?php echo $_SESSION['user']; ?></div>
        <img src="img/logo/logo.png" alt="#" class="header__logo">
        <div class="background__hero"></div>
        <div class="menu">
            <?php
            if (isset($_COOKIE["user"])) : ?>
                <div class="menu__btn-user"><?php echo $_SESSION['user']; ?><span class="menu__btn-arrow material-icons">arrow_drop_down</span></div>
                <a href="logout.php" class="menu__btn-register menu__btn-register-logout">LogOut</a>
                <a href="animeList.php" class="menu__btn-list">Anime List</a>
                <a href="searchAnime.php" class="menu__btn-search">Search Anime</a>

            <?php elseif (isset($_SESSION['user'])) : ?>
                <div class="menu__btn-user"><?php echo $_SESSION['user']; ?><span class="menu__btn-arrow material-icons">arrow_drop_down</span></div>
                <a href="logout.php" class="menu__btn-register menu__btn-register-logout">LogOut</a>
                <a href="animeList.php" class="menu__btn-list">Anime List</a>
                <a href="searchAnime.php" class="menu__btn-search">Search Anime</a>

            <?php else : ?>
                <div class="menu__btn-bg"></div>
                <a href="login.php" class="menu__btn-login">Log In</a>
                <a href="register.html" class="menu__btn-register">Sign Up</a>
            <?php endif; ?>

        </div>
    </header>
    <section class="section-one">
        <div class="heading-secondary">
            <div>Top Anime</div>
        </div>
        <div class="heading-secondary-sub">
            <div>Of All Times</div>
        </div>
        <div class="container" id="container"></div>
        <div class="genre" id="genre"></div>
        <div class="popup" id="popup"></div>
    </section>

    <section class="section-two">
        <div class="heading-secondary">
            <div>Top Anime</div>
        </div>
        <div class="heading-secondary-sub">
            <div>Of The Season</div>
        </div>
        <div class="container-two" id="container-two"></div>
        <div class="genre" id="genre"></div>
        <div class="popup" id="popup"></div>
    </section>
</body>
</html>
<script src="javascript/api.js"></script>
<script src="javascript/popup/popup.js"></script>
<script src="javascript/carousel.js"></script>
<script src="javascript/carousel2.js" defer></script>
<script src="javascript/api2.js"></script>
<script src="javascript/code.js"></script>

<script src="javascript/popup/autoExpand.js"></script>
