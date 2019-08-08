<?php
	session_start();
	$error=FALSE;
	if($_SERVER["REQUEST_METHOD"]=="POST"){
		if(empty($_POST["username"])){
			$error=TRUE;
		}else{
			$_SESSION["username"]=$_POST["username"];
		}
	}
?>
<form action="login.php" method="get">
	Ingrese nombre de usuario: <input type="text" name="username"> <br>
	Ingrese contraseña: <input type="text" name="password"> <br>
	<input type="submit" name="go">
</form>
<?php
	if(isset($_GET["go"])):
		if($_GET["username"]==$_SESSION["username"]){
			header("Location: http://localhost/navegadorcito/index.php");
		}
		if($_GET["username"]!=$_SESSION["username"]):
?>
<h3>Nombre de usuario no existe, por favor registrese:</h3>
<form action="login.php" method="post">
	Ingrese nombre de usuario: <input type="text" name="username"> <br>
	Ingrese contraseña: <input type="text" name="password"> <br>
	<input type="submit">
</form>
<?php
		endif;
	endif;
	if($error):
?>
<h3>Nombre de usuario no existe, por favor registrese:</h3>
<form action="login.php" method="post">
	Ingrese nombre de usuario: <input type="text" name="username"> <br>
	Ingrese contraseña: <input type="text" name="password"> <br>
	<input type="submit">
</form>
<?php 
	endif 
?>