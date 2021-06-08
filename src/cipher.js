const cipher = {
  encode: function cifrar(offset, string) {
    let senhaCriptografada = "";

    for (let i = 0; i < string.length; i++) {
      let iniciar = string.charCodeAt(i);

      if (iniciar >= 65 && iniciar <= 90) {
        let newCode = ((iniciar - 65 + offset) % 26) + 65; //fórmula daniel ((codigoDaLetraAsc-65+deslocamento)%26)+65 
        let code = String.fromCharCode(newCode);
        senhaCriptografada = senhaCriptografada.concat(code);

      }

    }
    return senhaCriptografada;
  },
  // inverso para descriptografar, usar decode e subtrair o deslocamento
  decode: function (offset, string) {
    let senhaDescriptografada = "";
    console.log(offset, string);

    for (let i = 0; i < string.length; i++) {
      let iniciar = string.charCodeAt(i);

      if (iniciar >= 65 && iniciar <= 90) {
        let newCode = ((iniciar + 65 - offset) % 26) + 65; //formula inversa para subtrair deslocamento
        let code = String.fromCharCode(newCode);
        senhaDescriptografada = senhaDescriptografada.concat(code);
      }
    }
    return senhaDescriptografada

  },
};
export default cipher;
