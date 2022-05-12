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

    <table class="table">
        <thead>
            <tr class="table__header-tr">
                <th class="table__header-th">Watching</th>
                <th class="table__header-th">Completed</th>
                <th class="table__header-th">On Hold</th>
                <th class="table__header-th">Dropped</th>
                <th class="table__header-th">Plan to Watch</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th id="table__th__watching" class="table__th table__th__watching"></th>
                <th id="table__th__completed" class="table__th table__th__completed"></th>
                <th id="table__th__onHold" class="table__th table__th__onHold"></th>
                <th id="table__th__dropped" class="table__th table__th__dropped"></th>
                <th id="table__th__plantoWatch" class="table__th table__th__plantoWatch"></th>
            </tr>
        </tbody>
    </table>

    <div class="popup" id="popup"></div>

    <section id="popup__bg" class="popup__bg popup__none">
        <div class="popup__status">
            <div class="popup__status__shape">
                <h2 class="popup__status__title"></h2>
                <h2 class="popup__status__id"></h2>
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

<script src="javascript/animeList/codeList.js"></script>
<script src="javascript/animeList/popup.js"></script>
<script src="javascript/popup/autoExpand.js"></script>
<script src="javascript/animeList/statusPopup.js" defer></script>
<script src="javascript/animeList/codePopup.js" defer></script>
<!-- <script src="javascript/popup/codeComments.js"></script> -->