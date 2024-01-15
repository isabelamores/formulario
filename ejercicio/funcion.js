function validarFormulario() {
    // Validar el campo de nombre
    var nombre = document.getElementById("nombre").value;
    var regexNombre = /^[a-zA-Z]+$/;
    if (!regexNombre.test(nombre)) {
        alert("Error: El campo 'Nombre' solo debe contener caracteres alfabéticos. Ejemplo: Isabel");
        return false;
    }
    // Validar el campo de correo electrónico
    var correo = document.getElementById("correo").value;
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
        alert("Error: Formato de correo electrónico inválido. Ejemplo de formato correcto: usuario@ejemplo.com");
        return false;
    }
    // Validar el campo de comentarios
    var comentarios = document.getElementById("comentarios").value;
    if (comentarios.toLowerCase().includes("script")) {
        alert("Error: El campo 'Comentarios' no debe contener código malicioso.");
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;

    
}
