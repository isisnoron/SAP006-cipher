const cipher = {
  encode: function cifrar(offset, string) {
    let senhaCriptografada = "";

    if (offset == 0 || string == 0 || offset == null || string == null) 
      throw TypeError("Número e mensagem inválida");

    for (let i = 0; i < string.length; i++) {
      let iniciar = string.charCodeAt(i);

      if (iniciar >= 0 && iniciar < 65 || iniciar >= 91 && iniciar <= 96 || iniciar >= 123 && iniciar <= 126) {
        senhaCriptografada += String.fromCharCode(iniciar);
      }

      if (iniciar >= 65 && iniciar <= 90) { 
        let newCode = ((iniciar - 65 + offset) % 26) + 65; 
        let code = String.fromCharCode(newCode);
        senhaCriptografada = senhaCriptografada.concat(code);
      }
      else if (iniciar >= 97 && iniciar <= 122) {
        let newCode = ((iniciar - 97 + offset) % 26) + 97; 
        let code = String.fromCharCode(newCode);
        senhaCriptografada = senhaCriptografada.concat(code);

      }   /* para fazer caracteres e numeros não aparecerem, usar: 
      else if (iniciar >= 32 && iniciar <= 64 ){
        iniciar = ((iniciar - 32 + offset) % 33) + 32;
      }*/
    }
    return senhaCriptografada;

  },

  decode: function (offset, string) {
    let senhaDescriptografada = "";

    if (offset === 0 || string === 0 || offset === null || string === null)
      throw TypeError("Número e mensagem inválida");

    for (let i = 0; i < string.length; i++) {
      let iniciar = string.charCodeAt(i); 

      if (iniciar >= 0 && iniciar < 65 || iniciar >= 91 && iniciar <= 96 || iniciar >= 123 && iniciar <= 126) { 
        senhaDescriptografada += String.fromCharCode(iniciar);
      }

      if (offset > 0 && iniciar >= 65 && iniciar <= 90) {
        let newCode = ((iniciar + 65 - offset) % 26) + 65;
        let code = String.fromCharCode(newCode);
        senhaDescriptografada = senhaDescriptografada.concat(code);
      }

      else if (iniciar >= 97 && iniciar <= 122) {
        let newCode = 122 - ((122 - iniciar + offset) % 26);
        let code = String.fromCharCode(newCode);
        senhaDescriptografada = senhaDescriptografada.concat(code);

      }
    }
    return senhaDescriptografada;

  },
};
export default cipher;
