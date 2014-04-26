<?php
if (!empty($_GET["app"])) {
	switch ($_GET["app"]) {
	 	case 'rookie-calc':
	 		$data['title']= 'Calculadora de Rookies';
	 		require_once("../views/themes/default/header.php");
			require_once("../views/rookieCalc/stats.php");
			require_once("../views/rookieCalc/potencial.php");
		break;
	 	case 'resist-calc':
	 		$data['title']= 'Calculadora de Resistencia';
	 		require_once("../views/themes/default/header.php");
			require_once("../views/resistCalc/index.html");
        break;
	 }
}
require_once("../views/themes/default/footer.php");
?>