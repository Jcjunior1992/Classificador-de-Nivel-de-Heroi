let nomeHeroi = "Julius Von Ghosts"
let pontosDeExperiencia = 9420
let nivel = "inicio"

if (pontosDeExperiencia < 1000) {
    nivel = "Ferro";
} else if (pontosDeExperiencia >= 1000 && pontosDeExperiencia < 2000) {
    nivel = "Bronze";
} else if (pontosDeExperiencia >= 2000 && pontosDeExperiencia < 5000) {
    nivel = "Prata";
} else if (pontosDeExperiencia >= 5000 && pontosDeExperiencia < 7000) {
    nivel = "Ouro";
} else if (pontosDeExperiencia >= 7000 && pontosDeExperiencia < 8000) {
    nivel = "Platina";
} else if (pontosDeExperiencia >= 8000 && pontosDeExperiencia < 9000) {
    nivel = "Ascendente";
} else if (pontosDeExperiencia >= 9000 && pontosDeExperiencia < 10000) {
    nivel = "Imortal";
} else if (pontosDeExperiencia >= 10000) {
    nivel = "Radiante";
}
console.log("O Herói de nome " + nomeHeroi + ","+" está no nível de "+  nivel);