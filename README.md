# Ativi-pipeline
# 🧮 Projeto de Funções Matemáticas - Igor

Este projeto implementa duas funções matemáticas simples — **soma** e **multiplicação** — utilizando JavaScript moderno (ESModules). Também inclui uma página HTML para exibir os resultados no navegador e testes automatizados com **Jest**.


## 🚀 Como Executar

### ✅ 1. Rodar no Navegador

Abra o arquivo `index.html` no seu navegador (clique duas vezes ou arraste para o navegador).

Ele exibirá os resultados da **soma(3, 4)** e **multiplicação(3, 4)** na tela.

> ⚠️ Certifique-se de que o arquivo `src/index.js` está no mesmo caminho relativo indicado no HTML.

---

## 🧪 Como Rodar os Testes

Este projeto utiliza [Jest](https://jestjs.io/) para testes automatizados.

### ▶️ Instalar as dependências

```bash
npm install
▶️ Executar os testes
bash
Copiar código
npm test
Você verá a saída dos testes no terminal, confirmando se as funções estão funcionando corretamente.

📦 Instalação Manual (caso ainda não tenha feito)
Se estiver começando do zero:

bash
Copiar código
npm init -y
npm install --save-dev jest
Depois, adicione no package.json:

json
Copiar código
"scripts": {
  "test": "jest"
}
✅ Exemplo de Uso
js
Copiar código
import { soma, multiplicacao } from './src/index.js';

console.log(soma(2, 3)); // 5
console.log(multiplicacao(2, 3)); // 6
👤 Autor
Igor
Projeto criado para fins de estudo e prática com JavaScript, HTML e testes com Jest.