function reproducir() {
    const texto = document.getElementById("resultado").textContent;
    if (texto.trim() !== "") {
      const speech = new SpeechSynthesisUtterance(texto);
      speech.lang = "quc-GT";
      window.speechSynthesis.speak(speech);
    }
  }