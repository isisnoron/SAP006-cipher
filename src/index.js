import cipher from "./cipher.js";

const senha = document.getElementById("senha");
const senhaCifrada = document.getElementById("senhaCifrada");
const botaoCifra = document.getElementById("botaoCifra");
const botaoDecifra = document.getElementById("botaoDecifra");
const error = document.getElementById("error");
const errorDecode = document.getElementById("errorDecode");

botaoCifra.addEventListener("click", (evento) => {
  let text = senha.value;
  let deslocamento = document.getElementById("offset").value;
  const offset = parseInt(deslocamento);

  if (text == "" && deslocamento == "") {
    evento.preventDefault();
    error.innerHTML = "Preencha número de deslocamento e senha*";
    senhaCifrada.value = "";
  } else if (deslocamento == "") {
    evento.preventDefault();
    error.innerHTML = "Preencha o número de descolamento*";
    senhaCifrada.value = "";
  } else if (text == "") {
    evento.preventDefault();
    error.innerHTML = "";
    errorDecode.innerHTML = "";
    error.innerHTML = "Preencha o campo abaixo*";
    senhaCifrada.value = "";
  } else {
    let senhaCriptografada = cipher.encode(offset, text);
    senhaCifrada.value = senhaCriptografada;
    error.innerHTML = "";
    errorDecode.innerHTML = "";
    evento.preventDefault();
  }
});

botaoDecifra.addEventListener("click", (evento) => {
  let text = senhaCifrada.value;
  let deslocamento = document.getElementById("offset").value;
  const offset = parseInt(deslocamento);

  if (text == "" && deslocamento == "") {
    evento.preventDefault();
    error.innerHTML = "Preencha número de deslocamento e senha*";
    senha.value = "";
  } else if (deslocamento == "") {
    evento.preventDefault();
    error.innerHTML = "Preencha o número de descolamento*";
    senha.value = "";
  } else if (text == "") {
    evento.preventDefault();
    error.innerHTML = "";
    errorDecode.innerHTML = "Preencha o campo abaixo*";
    senha.value = "";
  } else {
    let senhaDescriptografada = cipher.decode(offset, text);
    senha.value = senhaDescriptografada;
    error.innerHTML = "";
    errorDecode.innerHTML = "";
    evento.preventDefault();
  }
});
