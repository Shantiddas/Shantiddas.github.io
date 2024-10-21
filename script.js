document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validación simple
    if (name === "" || email === "" || message === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    // Aquí puedes agregar la lógica para enviar el formulario a un servidor

    document.getElementById('response-message').innerText = `Gracias ${name}, tu mensaje ha sido enviado.`;
    
    // Limpiar el formulario
    this.reset();
});