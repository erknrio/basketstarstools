<head>
	<title>Basketstars Tools</title>
	<meta charset="UTF-8">
  <base href="http://localhost/basketstarstools/">
	<!-- jquery -->
	<script src="libs/jquery-2.0.3.min.js"></script>
	<!-- bootstrap -->
	<script type="text/javascript" src="libs/bootstrap-3.0.3/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="libs/bootstrap-3.0.3/css/bootstrap.min.css">
	<!-- /bootstrap -->
  <!-- styles -->
  <link rel="stylesheet" type="text/css" href="styles.css"/>
  <!-- app custom -->
  <?php
  if (!empty($_GET["app"])) {
    switch ($_GET["app"]) {
       case 'rookie-calc':
  ?>
  <link rel="stylesheet" type="text/css" href="apps/rookieCalc/styles.css"/>
  <script type="text/javascript" src="apps/rookieCalc/js/rookieCalcVar.js"></script>
  <script type="text/javascript" src="apps/rookieCalc/js/rookieCalc.js"></script>
<?php       
       break;
       case 'resist-calc':
?>
  <link rel="stylesheet" type="text/css" href="apps/resistCalc/styles.css"/>
  <script type="text/javascript" src="apps/resistCalc/js/resistCalcVar.js"></script>
  <script type="text/javascript" src="apps/resistCalc/js/resistCalc.js"></script>
<?php
       break;
    }
  }
?>
</head>
<body style="padding-top: 70px;">
<?php if(!empty($_GET["app"])) require_once("../navbar.php"); else require_once("navbar.php"); ?>