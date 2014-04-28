<!doctype html>
<html lang="es">
<head>
	<base href="http://localhost/basketstarstools/">
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo $data['title']; ?></title>
	<script type="text/javascript" src="assets/jquery.min.js"></script>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
  <!-- styles -->
  <link rel="stylesheet" type="text/css" href="apps/views/themes/default/styles.css"/>
  <!-- app custom -->
  <?php
  if (!empty($_GET["app"])) {
    switch ($_GET["app"]) {
       case 'rookie-calc':
  ?>
  <link rel="stylesheet" type="text/css" href="assets/rookieCalc/styles.css"/>
  <script type="text/javascript" src="assets/rookieCalc/js/rookieCalcVar.js"></script>
  <script type="text/javascript" src="assets/rookieCalc/js/rookieCalc.js"></script>
<?php       
       break;
       case 'resist-calc':
?>
  <link rel="stylesheet" type="text/css" href="assets/resistCalc/styles.css"/>
  <script type="text/javascript" src="assets/resistCalc/js/resistCalcVar.js"></script>
  <script type="text/javascript" src="assets/resistCalc/js/resistCalc.js"></script>
<?php
       break;
    }
  }
?>
</head>
<body style="padding-top: 70px;">
<?php require_once("navbar.html"); ?>