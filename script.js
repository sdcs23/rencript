const mensaje1 = document.querySelector(".mensaje1")
const mensaje2 = document.querySelector(".mensaje2")

function encriptar(stringEncriptada){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matriz.length; i++) {
        if(stringEncriptada.includes(matriz[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matriz[i][0],matriz[i][1]);

        }
    }
    return stringEncriptada;

}

function desencriptar(stringDesncriptada){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesncriptada = stringDesncriptada.toLowerCase();
    for (let i = 0; i < matriz.length; i++) {
        if(stringDesncriptada.includes(matriz[i][1])){
            stringDesncriptada = stringDesncriptada.replaceAll(matriz[i][1],matriz[i][0]);

        }
    }
    return stringDesncriptada;
}


function botonEncriptar(){
    const textoEncriptado =encriptar(mensaje1.value);
    mensaje2.value = textoEncriptado;
    mensaje1.value = ""
}

function botonDesencriptar(){
    const textoDesencriptado =desencriptar(mensaje1.value);
    mensaje2.value = textoDesencriptado;
    mensaje1.value = ""
}

function copiar() {
    let texto = document.getElementById("mensaje2");
    texto.select();
    texto.setSelectionRange(0,99999);
    document.execCommand('copy');
}

function soloLetras(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "abcdefghijklmnopqrstuvwxyz";

    if(letras.indexOf(tecla) == -1){
        alert("Solo letras en minuscula y sin acento")
        return false;
    }
}