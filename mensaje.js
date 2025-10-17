function MostrarMensaje() {
      const texto = document.getElementById("texto").value;
      const resultado = document.getElementById("mensajeResultado");

      if (texto.trim() === "") {
        resultado.innerHTML = "Por favor, escribe algo antes de enviar.";
      } else {
        resultado.innerHTML = "<p> " + texto + "</p>"+ "Gracias por tu mensaje/ sugerencia.";
        document.getElementById("texto").value = ""; // limpia el textarea
      }
    }

    