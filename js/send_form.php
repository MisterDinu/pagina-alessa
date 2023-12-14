<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "centroalessa@gmail.com"; // Cambia esto con tu dirección de correo electrónico
    
    // Recoge los datos del formulario
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];  // Nueva línea para obtener el asunto
    $message = $_POST["message"];

    // Crea el mensaje de correo
    $mailBody = "Nombre: $name\n";
    $mailBody .= "Correo electrónico: $email\n";
    $mailBody .= "Asunto: $subject\n"; // Agrega el asunto al cuerpo del correo
    $mailBody .= "Mensaje:\n$message";

    // Envía el correo
    mail($to, $subject, $mailBody);

    // Puedes redirigir a una página de agradecimiento o enviar una respuesta JSON, según tus necesidades.
    echo json_encode(["success" => true, "message" => "Formulario enviado correctamente"]);
} else {
    // Si alguien intenta acceder directamente al script PHP, devolvemos un error.
    http_response_code(403);
    echo "Acceso prohibido";
}
?>