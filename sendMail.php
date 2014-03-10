<!doctype html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Envio Sugerencia</title>
</head>
<body style="text-align:center;">
	<h1>Su correo electrónico se está procesando... espere por favor</h1>
	<?php if (isset($_POST["enviar"])) {
	if (!empty($_POST['feedbackSelect']) and !empty($_POST['feedbackTextarea'])) {
		$to='info@adriangarrido.com.es, erknrio@gmail.com';
		switch ($_POST['feedbackSelect']) {
			case 0:
				$title="Sugerencia de Diseño";
				break;
			case 1:
				$title="Sugerencia de Calcualdora de Rookies";
				break;
			case 2:
				$title="Sugerencia de Calcualdora de Resistencia";
				break;
			case 3:
				$title="Sugerencia de Futuras Herramientras";
				break;
			case 4:
				$title="Sugerencia General";
				break;
			case 5:
				$title="Otras Sugerencias";
				break;
		}
		$message="{$_POST['feedbackTextarea']}";
		$control=mail($to, $title, $message);
	}
	if(isset($control)){?>
		<h3 style="color: #04B431">Su correo ha sido procesado correctamente, gracias por enviar sus comentarios</h3>
	<?php }else{ ?>
		<h2 style="color: #FF0000">Ha habido un error procesando su correo: puede que no haya rellenado todos los campos</h2>
		<h3>Si el error persiste le agradeceríamos que nos envíe un correo electrónico directamente a <span style="font-weight:bold;">info@adriangarrido.com.es</span></h3>
		<p style="font-weight:bold;">Gracias por su colaboración y disculpe las molestias :-).</p>
		<?php } ?>
<?php
} ?>
<a href="index.php" style="text-decoration:none; font-weight:bold;">Volver al Inicio</a>
</body>
</html>