const botao = document.querySelector(".form-botao");
const senha1 = document.querySelector("#senha");
const senha2 = document.querySelector("#conf-senha");
const mensagem = document.querySelector("#texto-erro");
botao.disabled = true;
botao.classList.add("botoes-desabilitado");

function testarSenha(senha1, senha2, mensagem){

    if(!(senha1 == senha2)){
        mensagem.innerHTML = "*As senhas não conferem!";
        mensagem.classList.remove("error");
        botao.disabled = true;
        botao.classList.add("botoes-desabilitado");
    }else{
        mensagem.classList.add("error");
        botao.disabled = false;
        botao.classList.remove("botoes-desabilitado");
    }
}

senha2.addEventListener("keyup", ()=>{
    testarSenha(senha1.value, senha2.value, mensagem);
})