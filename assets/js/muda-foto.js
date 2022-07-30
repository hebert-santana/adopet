let fotoAtual = document.querySelector("#foto--perfil");
let inputArquivo = document.querySelector('#foto--carregar');

function mudaFoto() {

    fotoAtual.addEventListener('click', () => {
        inputArquivo.click();
    });
}


    function readImage() {
        if (this.files && this.files[0]) {
            var file = new FileReader();
            file.onload = function(e) {
                inputArquivo.src = e.target.result;
            };       
            file.readAsDataURL(this.files[0]);
        }
    }
    
    fotoAtual.addEventListener("change", readImage, false);






