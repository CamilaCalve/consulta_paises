const botaoConsultar = document.getElementById("consultar");
const nomePais = document.getElementById("nomePais");

botaoConsultar.addEventListener("click", () => {
    let nomePaisUsuario = nomePais.value.trim(); // pega o texto digitado e remove espaços nas extremidades
    if (nomePaisUsuario) {
        buscaPais(nomePaisUsuario);
    }
});

async function buscaPais(nomePaisUsuario) {
    let erroPais = document.getElementById("erroPais");
    erroPais.innerText = "";

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${nomePaisUsuario}`);
        const dados = await response.json();

        if (response.ok && dados.length > 0) {
            exibeDados(dados[0]);
        } else {
            erroPais.innerText = "País não encontrado.";
        }

    } catch (error) {
        console.error("Erro ao buscar país:", error);
        erroPais.innerText = "Erro ao buscar país.";
    }
}

function exibeDados(pais) {
    document.getElementById("nome").innerText = pais.name.common;
    document.getElementById("capital").innerText = pais.capital ? pais.capital[0] : "N/A";  // condição ? valor_se_verdadeiro : valor_se_falso
    document.getElementById("regiao").innerText = pais.region;
    document.getElementById("populacao").innerText = pais.population.toLocaleString("pt-BR");
    document.getElementById("imagem").src = pais.flags.svg;
}
