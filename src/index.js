import cipher from './cipher.js'


const senha = document.getElementById("senha");
const senhaCifrada = document.getElementById("senhaCifrada");
const botaoCifra = document.getElementById("botaoCifra");
const botaoDecifra = document.getElementById("botaoDecifra");

botaoCifra.onclick = function (evento) {
    let text = senha.value;
    let deslocamento = parseInt(document.getElementById("offset").value);
    let senhaCriptografada = cipher.encode(deslocamento, text);
    senha.value = ("Resultado: " + senhaCriptografada);

    evento.preventDefault();
};

botaoDecifra.onclick = function (evento) {
    let text = senhaCifrada.value;
    let deslocamento = parseInt(document.getElementById("offset").value);
    let senhaDescriptografada = cipher.decode(deslocamento, text);
    senhaCifrada.value = ("Resultado: " + senhaDescriptografada);

    evento.preventDefault();
};


/*
Executa qnd uma tecla for pressionada no input
document.getElementById("mensagem").onkeypress = function(e) {
    //  Se for pressionado ENTER
    if (e.keyCode == ?) {
        mostrarValor();
        e.preventDefault();
    }
}

//let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];*/