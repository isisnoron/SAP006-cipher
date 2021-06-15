const cipher = {
  encode: function cifrar(offset, string) {
    let senhaCriptografada = "";

    if (offset == 0 || string == 0 || offset == null || string == null) //estrutura condicional if com valor boleano e operador logico 'ou'
      throw TypeError("Número e mensagem inválida"); //lança uma excessão, as instruçoes seguintes não serão executadas

    for (let i = 0; i < string.length; i++) {  // loop, string.lenght é o tamanho da senha e i++ irá somar
      let iniciar = string.charCodeAt(i);  //irá pegar o código ASC de cada letra;

      //caracteres especiais sem deslocamento
      if (iniciar >= 0 && iniciar < 65 || iniciar >= 91 && iniciar <= 96 || iniciar >= 123 && iniciar <= 126) {
        senhaCriptografada += String.fromCharCode(iniciar);
      }

      //pega o códigoASC maiúsculas c deslocamento; fórmula daniel ((codigoDaLetraAsc-65+deslocamento)%26)+65 
      if (iniciar >= 65 && iniciar <= 90) { // pegará dentro da tabela ASCII a msg
        let newCode = ((iniciar - 65 + offset) % 26) + 65; // formula daniel para cifrar
        let code = String.fromCharCode(newCode);
        senhaCriptografada = senhaCriptografada.concat(code);
      }
      else if (iniciar >= 97 && iniciar <= 122) {   //letras minúsculas
        let newCode = ((iniciar - 97 + offset) % 26) + 97; //pega o códigoASCII letras minúsculas com deslocamento
        let code = String.fromCharCode(newCode);
        senhaCriptografada = senhaCriptografada.concat(code);

      }   /* para fazer caracteres e numeros não aparecerem, usar: 
      else if (iniciar >= 32 && iniciar <= 64 ){
        iniciar = ((iniciar - 32 + offset) % 33) + 32;
      }*/
    }
    return senhaCriptografada;

  },

  // inverso para descriptografar, usar decode e subtrair o deslocamento
  decode: function (offset, string) {
    let senhaDescriptografada = "";

    if (offset === 0 || string === 0 || offset === null || string === null)
      throw TypeError("Número e mensagem inválida");

    for (let i = 0; i < string.length; i++) {
      let iniciar = string.charCodeAt(i); //irá pegar o código ASC de cada letra;

      if (iniciar >= 0 && iniciar < 65 || iniciar >= 91 && iniciar <= 96 || iniciar >= 123 && iniciar <= 126) { //caracteres especiais sem deslocar
        senhaDescriptografada += String.fromCharCode(iniciar);
      }

      if (offset > 0 && iniciar >= 65 && iniciar <= 90) {
        let newCode = ((iniciar + 65 - offset) % 26) + 65; //formula inversa para subtrair deslocamento
        let code = String.fromCharCode(newCode);
        senhaDescriptografada = senhaDescriptografada.concat(code);
      }

      else if (iniciar >= 97 && iniciar <= 122) {
        //122 - ((122 - decodifica + offset) % 26)
        let newCode = 122 - ((122 - iniciar + offset) % 26);
        let code = String.fromCharCode(newCode);
        senhaDescriptografada = senhaDescriptografada.concat(code);

      }
    }
    return senhaDescriptografada;

  },
};
export default cipher;
