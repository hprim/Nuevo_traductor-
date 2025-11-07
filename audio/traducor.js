const diccionario = {
  "casa": "ja",
  "escuela": "nimajay",
  "maestro": "tijoxel",
  "agua": "jaʼ",
  "fuego": "kʼaq",
  "día": "qʼij",
  "noche": "aqʼabʼ",
  "cuerpo":"B'aqil, Ch'akul",
  "bigote":"Ismachi'",
  "corazón":"Anima'",
  "boca":"Chi'aj",
  "sangre": "Kik'el",
  "lengua":"Aq'",
  "garaganta": "Qulaj",
  "brazo":"Talab', Teleb'",
  "oreja":"Xikinaj",
  "rodilla":"Ch'ek",
  "nariz":"Tza'maj",
  "piel": "Tz'umal",
  "cabello":"Wi'aj",
  "vientre":"pam",
  "labio": "Chi'aj",
  "pulmón":"Poror, pospo'y",
  "pierna":"Aqanaj",
  "espalda":"Wij",
  "lágrima":"Uwal b'oq'och",
  "mano":"Q'ab'aj",
  "pestaña":"Metz'aj",
  "codo":"Chu'u'k",
  "cintura":"Xe'pam",
  "hombros":"Teleb'aj",
  "párpados":"Rij b'aq'och",
  "uña":"Ixk'iq",
  "cabeza":"Jolomaj",
  "cuello":"Qul",
  "pecho":"Uwach k'uxal",
  "dedo de la mano":"Uwi' qab' aj",
  "dedo del pie":"Uwi' aqanaj",
  "dientes": "Were",
  "yo":"In",
  "tú":"At",
  "usted":"Lal",
  "el":"Are'",
  "ella":"Are'",
  "nosotros":"Uj",
  "ustedes":"Alaq",
  "ellos":"E are'",
  "casa":"Ja",
  "sala":"Ja riqb' al ib'",
  "dormitorio":"Ja rech warem",
  "patio" : "Uwo ja",
  "jardín":"Tikb' al kotz'ij",
  "cocina" : "B'anb'al wa",
  "garaje" : "K'olb' al Ch'ich'",
  "baño" : "Ja rech atinem",
  "comedor" : 'ja rech nem',
  "cuarto" : "Nitz' ja",
  "gradas" : "Q'am b'e",
  "flores" : "Kotz'ij",
  "ventana" : "Ub'og'och ja, b'itok",
   "puerta" : "Uchī ja" ,
  "cortina":"Ch'uqb'al",
  "regadera":"Ja'b'al ja'",
  "mesa":"Mexa",
  "cama":"Ch'at",
  "lavamanos":"Ch'ajb'ä'l aqb'al",
  "silla":"Tem",
  "teléfono":"Cha' awib'äl",
  "sanitarió":"b'anib'al Chulaj",
  "televisión":"K'utwachib' äl",
  "tejado":"Xot ja",
  "timbre":"Tz'irb' al, sik'inib'äl",
  "chimenea":"Esb'al sib'",
  "sofá": "Yub'tem",
  "libreta":"Lajtz'ib' wuj",
  "impresora":"Tza'aj tz'ib'",
  "tinta de impresora":"Uwal Tz'ajtz'ib'",
  "compás":"Setb'äl",
  "tenedor":"Ixk'eqwab'äl",
  "tempera":"Ja'tz'ajb'al",
  "tostadora":"Wotz'otz'alb'äl",
  "pantalla" : "K'utun'al wachib'äl",
  "cañonera" : "k'utun'al wachib'äl",
  "sercha":"Xekeleb'al atz'yaq",
  "shampoo" : "Woqwi'ij",
  "yeso":"Chuntz'ib'",
  "muletas":"Jekb'inb'äl",
  "monedero":"Pwaqb'äl",
  "micrófono":"Taqb'äl",
  "papá":"Tat",
  "mamá":"Nan",
  "abuela":"Nimnan,mam",
  "tío":"Ch'utitat",
  "Tía":"Ch'utinan",
  "primo":"Ukab'achalaxik",
  "prima":"Ukab'achalaxik",
  "sobrino":"Ikaq'",
  "sobrina":"Ikaq'",
  "hermano":"Achalal",
  "Abuelo":"Tatanol, mam",
  "madrina":"Na'chinb'el, yo'x nan",
  "hijo":"K'ajol",
  "hija":"Mia'l",
  "0":"Majun",
  "1":"Jun",
  "2":"Kab'",
  "3":"Oxib'",
  "4":"Kajib'",
  "5":"Job'",
  "6":"Waqib'",
  "7":"Waqib'",
  "8":"Wajxaqib'",
  "9":"B'elejeb'",
  "10":"Lajuj",
  "11":"Julajuj",
  "12":"Kab'julajuj",
  "13":"Oxlajuj",
  "14":"Kajlajuj",
  "15":"Jo'lajuj",
  "16":"Waqlajuj",
  "17":"Wuqlajuj",
  "18":"Wajxaqlajuj",
  "19":"B'elejlajuj",
  "20":"Juk'al"
};
let ultimaPalabra = ""; // guardará la última palabra traducida

function traducir() {
  const palabra = document.getElementById("input-word").value.toLowerCase().trim();
  const resultado = document.getElementById("resultado");
  const btnAudio = document.getElementById("btnAudio");

  if (diccionario[palabra]) {
    const traduccion = diccionario[palabra];
    resultado.textContent = `En K'iche' "${palabra}" es: "${traduccion}"`;
    ultimaPalabra = palabra; // guarda la palabra actual para el audio
    btnAudio.disabled = false; // habilita el botón de reproducir
  } else {
    resultado.textContent = "Palabra no encontrada. Verifique la ortografía.";
    btnAudio.disabled = true;
    ultimaPalabra = "";
  }
}

// 🎧 Función separada para reproducir audio
function reproducir() {
  if (ultimaPalabra) {
    const audio = new Audio(`audio/${diccionario[ultimaPalabra]}.mp3`);

    audio.play();
  } else {
    alert("Primero traduce una palabra para reproducir su audio.");
  }
}