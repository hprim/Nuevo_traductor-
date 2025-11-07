document.addEventListener("DOMContentLoaded", function() {
  // Inicializar EmailJS con tu clave pública
  emailjs.init("4e_P7G-2erCGU7xXR");

  const form = document.getElementById("sugerencia-form");
  const estado = document.getElementById("estado");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
      title: form.title.value.trim(),
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      user_email: form.email.value.trim(),
      message: form.message.value.trim(),
      time: new Date().toLocaleString()
    };

   
    if (!data.name || !data.email || !data.message || !data.title) {
      estado.textContent = "Por favor, completa todos los campos antes de enviar.";
      estado.style.color = "gray";
      return;
    }

    
    emailjs.send("service_invSFHK", "template_kigjp5m", data)
      .then(() => {
        estado.textContent = "Tu sugerencia fue enviada con éxito";
        form.reset();
      })
      .catch((error) => {
        estado.textContent = " Error al enviar: " + error.text;
      });
  });
});
