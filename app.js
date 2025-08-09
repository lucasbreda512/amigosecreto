const amigos = [
    "Ana", "Bruno", "Carlos", "Daniela", "Eduardo",
    "Fernanda", "Gabriel", "Helena", "Isabela", "João"
];

function sortearAmigo() {
    const indice = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indice];
    document.getElementById('resultado').textContent = `Amigo sorteado: ${nomeSorteado}`;
}
