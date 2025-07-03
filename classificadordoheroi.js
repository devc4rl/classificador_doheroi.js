let nomedoheroi = "JavoScripto";
let nivelxp= 5500;

let nivelDoHeroi;

if (nivelxp < 1000) {
    nivelDoHeroi = "Ferro";
}
    else if (nivelxp >= 1001 && nivelxp <= 5000) {
        nivelDoHeroi = "Bronze";
    } else if (nivelxp >= 2001 && nivelxp <= 5000) {
    nivelDoHeroi = "Prata";
} else if (nivelxp >= 5001 && nivelxp <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (nivelxp >= 7001 && nivelxp <= 8000) {
    nivelDoHeroi = "Platina";
} else if (nivelxp >= 8001 && nivelxp <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (nivelxp >= 9001 && nivelxp <= 10000) {
    nivelDoHeroi = "Imortal";
} else { // Se for maior ou igual a 10.001 vai dar esse debaixo
    nivelDoHeroi = "Radiante";
}

console.log(`O heroi ${nomedoheroi} está no nível ${nivelDoHeroi} com ${nivelxp} de XP.`);