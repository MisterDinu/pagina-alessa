<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['message'];

    $mensaje = "Este mensaje fue enviado por: " . $nombre . "\r\n";
    $mensaje .= "Email: " . $email . "\r\n";
    $mensaje .= "Mensaje: " . $_POST['message'] . "\r\n";
    $mensaje .= "Enviado el " . date('d/m/Y', time());

    $destino = "centroalessa@gmail.com";
    $asunto = "Página Alessa";

    // Envía el correo
    mail($destino, $asunto, utf8_decode($mensaje));

    // Redirige después de enviar el correo
    header('Location: exito.html');
} else {
    // Si alguien intenta acceder directamente al script PHP, devolvemos un error.
    http_response_code(403);
    echo "Acceso prohibido";
}
?>




<?php
// $nombre = $_POST['name'];
// $email = $_POST['email'];
// $mensaje = $_POST['message'];

// $mensaje = "Este mensaje fue enviado por:" . $nombre . "\r\n";
// $mensaje .= "Email:" . $email . "\r\n";
// $mensaje .= "Mensaje:" . $_POST['message'] . "\r\n";
// $mensaje .= "Enviado el " . date('d/m/Y', time());

// $destino = "centroalessa@gmail.com";
// $asunto = "Página Alessa";

// // función mail
// mail($para, $asunto, utf8_decode($mensaje), $header);

// header('Location:exito.html');