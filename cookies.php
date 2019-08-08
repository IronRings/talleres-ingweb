<?php 

$color = $name = $colorPreferido = $nombreUsuario = $nameError = "";
$colorPreferido = "colorPreferido";
$nombreUsuario = "nombreUsuario";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (empty($_POST["name"])) {
		$nameError = "Campo obligatorio";
	} else {
		$name = $_POST["name"];
		$name = trim($name);
		$name = stripslashes($name);
		$name = htmlspecialchars($name);
		if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
			$nameError = "Solo se permiten letras y espacios.";
		} else {
			setcookie($nombreUsuario, $name, time() + 600, "/");
			header("Refresh:0");
		}
	}
	if (!empty($_POST["color"])) {
		$color = $_POST["color"];
		setcookie($colorPreferido, $color, time() + 600, "/");
		header("Refresh:0");
	}
}
	
if(!isset($_COOKIE[$colorPreferido])) : ?>	
	<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
		Ingrese color preferido: <select name="color">
			<option value="#FF0000">Communism</option>
			<option value="#404080">Disappointment</option>
			<option value="#33cc55">Shrek</option>
			<option value="#FF00FF">Magenta</option>
			<option value="#ABCDEF">abcdef</option>
		</select> 
		<br>
		<input type="submit" name="submit" value="Submit">
	</form>
<?php elseif(!isset($_COOKIE[$nombreUsuario])) : ?>
	<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
		Nombre: <input type="text" name="name" value="<?php echo $name;?>">
		<span class="error">* <?php echo $nameError;?></span>
		<br>
		<input type="submit" name="submit" value="Submit">
	</form>
<?php 
	else :
		echo '<div style="Color:'.$_COOKIE[$colorPreferido].'">Hola '.$_COOKIE[$nombreUsuario].'</div';
	endif
?>
