<?php
  session_start();

    if(isset($_SESSION["username"])){
      header("refresh:0;url=http://localhost/navegadorcito/index.php");
    }
    else{
        header("Location: http://localhost/navegadorcito/login.php");
    }
  ?>
