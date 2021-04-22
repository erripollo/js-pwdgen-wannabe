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
var pwd = (userName + lastName + favColor).toLowerCase();
console.log(pwd);

var pwdNumber = pwd.length;
console.log(pwdNumber);

var pwdGen = document.getElementById('pwd').innerHTML = pwd + pwdNumber