function inverterString(str) {
    var strInvertida = ""
    for (var i = str.length - 1; i >= 0; i--) {
      strInvertida += str[i];
    }
    return strInvertida;
  }

  var strOriginal = "Desafio Target";
var strInvertida = inverterString(strOriginal);
console.log(strInvertida);
