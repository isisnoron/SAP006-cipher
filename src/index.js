import cipher from './cipher.js'

//declarei e atribui valor as variáveis 
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