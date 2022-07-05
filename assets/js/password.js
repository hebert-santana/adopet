function visualizadorSenha(inputValue, iconeValue){
    let input = document.querySelector(inputValue);
    let icone = document.querySelector(iconeValue);

    if(input.type == "text"){
        input.type = "password";
        icone.src="../assets/img/icon/eye-off.svg"
    }else{
        input.type = "text";
        icone.src="../assets/img/icon/eye.svg"
    }
}