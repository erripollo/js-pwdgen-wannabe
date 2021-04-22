//chiedere nome
var userName = prompt('Come ti chiami?');
console.log(userName);

//chiedere cognome
var lastName = prompt('Qual\'è il tuo cognome?');
console.log(lastName);

//chiedere colore preferito
var favColor = prompt('Qual\'è il tuo colore preferito?');
console.log(favColor);

//mostrare pwd nomecognomecolore21
var stringNumberPwd = '21';

var pwdGen = document.getElementById('pwd');
pwdGen.innerHTML = (userName + lastName + favColor + stringNumberPwd).toLowerCase();