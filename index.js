let bnt = document.querySelector("#calc");
let reiniciar = document.querySelector("#restart");

bnt.addEventListener("click", ()=> {
    let nome = document.querySelector("#name").value;
    let altura = document.querySelector("#altura").value;
    let peso = document.querySelector("#peso").value;
    let hide = document.querySelector(".hide");
    let nomeResult = document.querySelector("#nome");
    let result = document.querySelector("#result");
    let conteiner = document.querySelector("#conteiner");
    
    let resultado = peso / (altura * 2);

    if(nome != "" && altura != "" &&  peso != "") {
     hide.setAttribute("style", "display: block");
    nomeResult.textContent = nome;
    result.textContent = resultado.toFixed(1);
    conteiner.setAttribute("style", "display: none");
    }    
});

