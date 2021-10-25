//A, B, C,..,G deben de ser chistes
let chiste1 = "-Niño, sal del coche y mira si funciona el intermitente.<br>-Ahora sí, ahora no, ahora sí, ahora no, ahora sí, ahora no…";
let chiste2 = "—Oye, ¿sabes cómo se llaman los habitantes de Barcelona?<br>—Hombre, pues todos no.";
let chiste3 = "—¿Dónde vas, Antonio<br>—A por estiércol para las fresas.<br>—¿Pero por qué no te las comes con nata, como todo el mundo?";
let chiste4 = "—Mamá, el abuelo está malo.<br>—Pues apártalo y cómete solo las patatas.";
let chiste5 = "-Oye llevamos juntos 40 años y nunca me has comprado nada.<br>-¿Y tú que vendes?.";
let chiste6 = "-Oye Paco llevamos mucho tiempo sin mantener relaciones sexuales.<br>-Llevamos dice.";
let chiste7 = "—¿Cuánto cuesta alquilar un coche?<br>—Depende del tiempo.<br>—Vale, pongamos que llueve.";
const jokes = [chiste1, chiste2, chiste3, chiste4, chiste5, chiste6, chiste7];

function getJoke() {
    document.getElementById("joke").innerHTML = '"' + jokes[parseInt(Math.random() * jokes.length)] + '"';
}