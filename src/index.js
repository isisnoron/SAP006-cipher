import cipher from './cipher.js'
console.log(cipher);

let senha = document.getElementById("senha");
//let deslocamento = (document.getElementById("offset").value);
let senhaCifrada = document.getElementById("senhaCifrada");

let cifrarTexto = document.getElementById("cifrarTexto");
let decifrarTexto = document.getElementById("decifrarTexto");

let offsetBtn = document.getElementById("offsetBtn");

//offsetBtn.onclick = console.log(cipher.encode(deslocamento, senha.value))
//offsetBtn.onclick = console.log(cipher.decode(deslocamento, senhaCifrada.value))

botaoCifra.onclick = function (evento) {
    let text = senha.value;
    let deslocamento = parseInt(document.getElementById("offset").value);
    console.log(cipher.encode(deslocamento, text))
    let senhaCriptografada = cipher.encode(deslocamento, text);
    senha.value = "Resultado: " + senhaCriptografada;


    //let btn = document.querySelector("#botaoCifra");
    //btn.onclick = function () {
    //alert("Sua senha cifrada é: " + senhaCriptografada);
    evento.preventDefault();
}

botaoDecifra.onclick = function (evento) {
    let text = senhaCifrada.value;
    let deslocamento = parseInt(document.getElementById("offset").value);
    console.log(cipher.decode(deslocamento, text))
    let senhaDescriptografada = cipher.decode(deslocamento, text);
    senhaCifrada.value = "Resultado: " + senhaDescriptografada;


    //let btn = document.querySelector("#botaoCifra");
    //btn.onclick = function () {
    //alert("Sua senha cifrada é: " + senhaCriptografada);
    evento.preventDefault();
}


    //document.getElementById("botaoCifra").onclick = function () { alert("Sua senha cifrada é:" + senhaCriptografada); };

//}
// inverso
/*decifrarTexto.onsubmit = function (evento) {
    let text = senhaCifrada.value;
    let deslocamento = parseInt(document.getElementById("offset").value);
    let senhaDescriptografada = cipher.decode(text, deslocamento);
    senha.value = senhaDescriptografada;
    evento.preventDefault();

    let btn = document.querySelector("#botaoDecifra");
    btn.onclick = function () {
        //alert("Sua senha decifrada é: " + senhaDescriptografada);
    }

}

/*button.onclick = function() {
let resultado = senha.value
    alert("Sua senha cifrada é" + resultado);

}

// Executa qnd uma tecla for pressionada no input
document.getElementById("mensagem").onkeypress = function(e) {
    //  Se for pressionado ENTER
    if (e.keyCode == ?) {
        mostrarValor();
        e.preventDefault();
    }
}

// ao clicar no botão de enviar
document.getElementById("mensagem").onclick = function(e) {
    mostrarValor();
    e.preventDefault();
}

// agora decifrar

function mostrarValor2() {
    alert(document.getElementById("senhaCifrada").value); //depois colocar aqui no o resultado da mensagem cifrada
}

// Executado qnd uma tecla for pressionada no input
document.getElementById("senhaCifrada").onkeypress = function(e) {
    //  Se for pressionado ENTER
    if (e.keyCode == 13) {
        mostrarValor2();
        e.preventDefault();
    }
}

// Executado ao clicar no botão de enviar
document.getElementById("senhaCifrada").onclick = function(e) {
    mostrarValor2();
    e.preventDefault();
}

//let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

function cifra(string) {
    return // string ja cifrada "???"
}

//interaçao em js e html (manipulação do dom)
//se eu quisr pegar do cifra e printar na minha tela a mensgem que foi criptografada ou decifrada eu vou ter que importar essas funções do cipher.js e atraves de document.element ou outro metodo eu printo o resultado dessa função no html*/

/*cifrarTexto.onsubmit = function (evento) {
    let text = senha.value;
    let deslocamento = (document.getElementById("offset").value);
    let senhaCriptografada = cipher.encode(deslocamento, text);
    senhaCifrada.value = senhaCriptografada;
    evento.preventDefault();*/