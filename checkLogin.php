<?php
$conn = mysqli_connect('localhost','root','','viralanime') or die('connection failed');

//Valida campos rellenados
if (strlen($_POST['username']) >= 1 && strlen($_POST['password']) >= 1){
    $username = $_POST['username'];
    $password = $_POST['password'];
    if(isset($_POST['remember'])){
    $remember = true;
    }
    session_start();

    $_SESSION['user'] = $username;

    // Valida usuario y password de la base de datos
    $query = "SELECT*FROM users WHERE username='$username' and password='$password'";
    $name = "SELECT username FROM users WHERE username='$username'";
    $result = mysqli_query($conn,$query);

    $rows = mysqli_num_rows($result);

    if($rows){
        if (isset($remember)){ // login correcto & casilla marcada -> setea cookie
            setcookie("user", $username, time() + (86400 * 30)); 
        }
        header("location:index.php");
    }else{
        include("login.php");
        ?>
        <h2 class="error">El usuario y contraseña ingresados no son válidos</h2>
        <?php
    }

    mysqli_free_result($result);
    mysqli_close($conn);
}else{
    include("login.php");
    ?>
    <h2 class="error">Debes rellenar todos los campos para el Login.</h2>
    <?php
}
?>