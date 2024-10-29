var meunasc = new Date(2008, 1, 8, 8, 30, 0);
console.log("Data de nascimento:", meunasc);

var hoje = new Date();
console.log("Data de hoje:", hoje);

var elapsed = hoje - meunasc;
let tempovivo = elapsed / 1000; 

var anos = Math.floor(tempovivo / 31536000);
tempovivo -= anos * 31536000;

var meses = Math.floor(tempovivo / 2592000);
tempovivo -= meses * 2592000;

var dias = Math.floor(tempovivo / 86400);
tempovivo -= dias * 86400;

var horas = Math.floor(tempovivo / 3600);
tempovivo -= horas * 3600;

var minutos = Math.floor(tempovivo / 60);
tempovivo -= minutos * 60;

var segundos = Math.floor(tempovivo);

console.log("Tempo de vida:", anos + " anos, " + meses + " meses, " + dias + " dias, " + horas + " horas, " + minutos + " minutos, e " + segundos + " segundos.");
