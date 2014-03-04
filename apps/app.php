<!doctype html>
<html lang="es">
<?php
var_dump($_GET["app"]);
if (!empty($_GET["app"])) {
	switch ($_GET["app"]) {
	 	case 'rookie-calc':
	 		require_once("../header.php");
			require_once("rookieCalc/stats.php");
			require_once("rookieCalc/potencial.php");
		break;
	 	case 'resist-calc':
	 		require_once("../header.php");
			require_once("rookieCalc/stats.php");
			require_once("rookieCalc/potencial.php");
	 		break;
	 }
}
require_once("../footer.php");
?>
</body>
</html>