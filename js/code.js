//A, B, C,..,G deben de ser chistes
let chiste1 = "";
let chiste2 = "";
let chiste3 = "";
let chiste4 = "";
let chiste5 = "";
let chiste6 = "";
let chiste7 = "";
const jokes = ["A", "B", "C", "D", "E", "F", "G"];

function getJoke() {
    document.getElementById("joke").innerHTML = '"' + jokes[parseInt(Math.random() * jokes.length)] + '"';
}