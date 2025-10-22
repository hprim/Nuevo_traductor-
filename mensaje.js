document.addEventListener("DOMContentLoaded", function() {
  // Inicializar EmailJS con tu clave pública
  emailjs.init("gWO-QHs3JzIYOzqL2");

  // Capturar el formulario
  const form = document.getElementById("sugerencia-form");
  const estado = document.getElementById("estado");

  // Escuchar el envío del formulario
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const mensaje = form.message.value.trim();
    const correo = form.user_email.value.trim();

    if (!mensaje) {
      estado.textContent = "Por favor, escribe algo antes de enviar.";
      estado.style.color = "gray";
      return;
    }

    // Enviar usando EmailJS
    emailjs.send("service_inv4bnn", "template_fb1mz7m", {
      message: mensaje,
      user_email: correo
    })
    .then(() => {
      estado.textContent = "✅ ¡Tu sugerencia fue enviada con éxito!";
      estado.style.color = "green";
      form.reset();
    })
    .catch((error) => {
      estado.textContent = "❌ Error al enviar: " + error.text;
      estado.style.color = "red";
    });
  });
});