function confirmaSenha() {
    const senha = document.querySelector('#senha')
    const senhaConfirma = document.querySelector('#confirma-senha')

    const tamanho = senha.value
    const tamanhoString = new String(tamanho)
    console.log(tamanhoString)
    console.log(tamanhoString.length)


    if (tamanhoString.length < 5) {
        console.log('A senha deve ter no mínimo 6 caracteres')
        senha.setCustomValidity('A senha deve ter no mínimo 6 caracteres');
    } else {
        senha.setCustomValidity('');
    }

    if (senha.value === senhaConfirma.value) {
        senhaConfirma.setCustomValidity('');
    } else {
        senhaConfirma.setCustomValidity('As senhas digitadas são diferentes');
    }
}

function senhaOK() {
    console.log('As senhas conferem!')
}

