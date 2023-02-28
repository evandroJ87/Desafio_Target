const SP = Number(67.836,43);
const RJ = Number(36.678,66);
const MG = Number(29.229,88);
const ES = Number(27.165,48);
const Outros = Number(19.849,53);

const total = SP+RJ+MG+ES+Outros;

function Percentual(valor, total) {
    var percentual = (valor / total) * 100;
    return percentual.toFixed(2) + "%";
  }

  var resultado = Percentual(SP, total);
  console.log(resultado);