//var Nome = ["Humberto"];
//var Endereco = ["Ponte Alta"];
//var Telefone = [3234211010];
//console.log(Nome[0]);
//console.log(Endereco[0]);
//console.log(Telefone[0]);

var Dados= {

    "Humberto": {endereco: "Avenida Jesus, 176 - Cataguases", telefone: "34211100"},
    "Nicolas": {endereco: "Rua das Flores, 29 - Cataguases", telefone:"34210001"},
    "Diego": {endereco: "Ponte Alta, 24 - Cataguases", telefone:"342111111"}
}

console.log( "Dados do Humberto: "+ Dados["Humberto"].endereco +"  "+ Dados["Humberto"].telefone);
console.log( "Dados do Nicolas: "+ Dados["Nicolas"].endereco +"  "+ Dados["Nicolas"].telefone);
console.log( "Dados do Diego: "+ Dados["Diego"].endereco +"  "+ Dados["Diego"].telefone);
