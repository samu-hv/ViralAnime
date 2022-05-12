<?php
if (isset($_COOKIE["username"])) {
    header("location:index.php");
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="css/style.css">
    <link rel="Shortcut Icon" type="image/png" href="img/logo/logo-cut.png">

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <title>Viral Anime - LogIn</title>
</head>

<body>

    <body>
        <div class="page__bg">
            <div class="circle__orange"></div>
            <div class="circle__yellow"></div>
            <div class="form">
                <a href="index.php">
                    <span class="material-icons icon__close">clear</span>
                </a>
                <div class="form__logo">
                    <a href="index.php">
                        <img src="img/logo/logo-cut.png" alt="#" class="form__logo-img">
                    </a>
                </div>
                <h1 class="form__title">Log In</h1>
                <form action="checkLogin.php" method="post">
                    <label for="username" class="form__label">Username</label>
                    <input type="text" name="username" class="form__input" placeholder="Username">
                    <label for="password" class="form__label">Password</label>
                    <input type="password" name="password" class="form__input" placeholder="Password">
                    <label for="remember" class="form__remember">
                        <input type="checkbox" name="remember" class="form__remember-check">
                        Keep me Signed in
                    </label>
                    <input type="submit" value="Log In" class="form__btn-log">
                    <a href="register.html" class="form__btn-sign">Sign Up</a>
                </form>
            </div>
        </div>

    </body>
</body>

</html>