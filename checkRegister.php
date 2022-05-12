<?php
/*  isset --> si esta seteado
    strlen --> longitud del string
    trim --> elimina espacios al comienzo y al final de cada campo
*/
include('config.php'); //--> para traer la variable conexion

        // Chequea si está seteada la variable global 'registrarse
if (isset($_POST['signup'])) {
        // Verifica que todos los campos estén completos
        if (strlen($_POST['username']) >= 1 && strlen($_POST['email']) >= 1 && strlen($_POST['password']) >= 1 && strlen($_POST['favoriteChar']) >= 1) {
            $username = trim($_POST['username']);
            $email = trim($_POST['email']);
            $password = trim($_POST['password']);
            $favoriteChar = trim($_POST['favoriteChar']);
            $date = date("d/m/y");
        // Verifica repetición de usuario y email
        $verifyUserName = mysqli_query($conn ," SELECT * FROM users WHERE username='$username' ");
        $verifyEmail = mysqli_query($conn ," SELECT * FROM users WHERE email='$email' ");

        if( mysqli_num_rows($verifyEmail) > 0 ){
            include ("register.html");
            echo "<p class='error'> This email already exists. Please enter a new Email. </p>";
            mysqli_close($conn);
            exit();
        } 
        if( mysqli_num_rows($verifyUserName) > 0 ){
            include ("register.html");
            echo "<p class='error'> This user name already exists. Please enter another one. </p>";
            mysqli_close($conn);
            exit();
        }
        
        $query = "INSERT INTO users (username, email, password, favoriteChar, date) VALUES ('$username','$email','$password','$favoriteChar', '$date')";
        $result = mysqli_query($conn, $query);

        if ($result) {
            include ("login.php");
            echo "<h3 class='ok'>¡Sign up Succesfully. Please login!</h3>";
        }else{
            ?> 
            <h3 class="error">Error. Please try again</h3>
            <?php
        }
    }else{
        include("register.html");
        ?> 
        <h3 class="error">Please complete every field</h3>
        <?php
    }
}
?>