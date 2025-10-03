// https://restcountries.com/v3.1/name/NOME DO PAÍS

const nomePais = document.getElementById("nomePais");

nomePais.addEventListener("change", (evento) => {
    let nomePaisUsuario = evento.target.value;
    buscaPais(nomePaisUsuario);
});

async function buscaPais(nomePaisUsuario) {

    let erroPais = document.getElementById("erroPais");
    erroPais.innerText = "";

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${nomePaisUsuario}`);
        const dados = await response.json();

        if (dados && dados.length > 0) {  // "dados.length > 0": verifica se o array de países tem pelo menos um elemento 
            exibeDados(dados[0]);
        } else {
            erroPais.innerText = "País não encontrado";
        }


    } catch (error) {
        console.error("Erro ao buscar país:", error);
        erroPais.innerText = "Erro ao buscar país";
    }

}
function exibeDados() {

    let nome = document.getElementById("nome")
    let capital = document.getElementById("capital")
    let regiao = document.getElementById("regiao")
    let populacao = document.getElementById("populacao")
    let imagem = document.getElementById("imagem")

    nome.value = 
}