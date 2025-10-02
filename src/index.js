function soma(a, b) {
  return a + b;
}

function multiplicacao(a, b) {
  return a * b;
}

// expõe no navegador
if (typeof window !== 'undefined') {
  window.soma = soma;
  window.multiplicacao = multiplicacao;
}

// exporta para Jest
module.exports = { soma, multiplicacao };
