# 🧮 Calculadora de IMC (Índice de Massa Corporal)

Este projeto é uma **Calculadora de IMC (Índice de Massa Corporal)** feita com **HTML**, **CSS** e **JavaScript**, que permite ao usuário inserir seu peso e altura para descobrir em qual faixa de IMC se encontra — com mensagens personalizadas sobre sua condição física.

---

## 🚀 Funcionalidades

- Entrada de **peso (kg)** e **altura (m)**
- Cálculo automático do IMC ao clicar em **Calcular**
- Exibição do resultado com **arredondamento de 1 casa decimal**
- Mensagens personalizadas conforme o resultado:
  - ⚠️ Abaixo do peso  
  - ✅ Peso ideal  
  - ⚠️ Sobrepeso  
  - ⚠️ Obesidade Grau I  
  - ⚠️ Obesidade Grau II  
  - ⚠️ Obesidade Grau III
- Link para mais informações sobre o IMC
- Interface simples, responsiva e estilizada

---

## 💻 Tecnologias utilizadas

- **HTML** → estrutura da página  
- **CSS** → estilização e layout  
- **JavaScript** → lógica e interatividade  
- **Font Awesome** → ícones decorativos

---

## 🧠 Como funciona

1. O usuário preenche o **peso** (em kg) e a **altura** (em metros).  
2. Ao clicar no botão **Calcular**, o JavaScript:
   - Pega os valores dos inputs
   - Calcula o IMC com a fórmula:  
     
     IMC = peso/altura^2
     
   - Exibe o resultado arredondado para **1 casa decimal**
   - Mostra uma mensagem correspondente à classificação do IMC

---

## 🧾 Classificações do IMC

| IMC | Classificação |
|-----|----------------|
| Menor que 18.5 | Abaixo do peso |
| 18.5 – 24.9 | Peso ideal |
| 25 – 29.9 | Sobrepeso |
| 30 – 34.9 | Obesidade Grau I |
| 35 – 39.9 | Obesidade Grau II |
| 40 ou mais | Obesidade Grau III |

---

## 🛠️ Estrutura de pastas
📁 Calculadora-IMC
│
├── 📁 CSS
│ └── Styles.css
│
├── 📁 JS
│ └── script.js
│
├── 📁 Img
│ └── malhando.webp
│
├── index.html
└── README.md

---

## 🧩 Exemplo de uso

| Peso (kg) | Altura (m) | Resultado |
|------------|-------------|------------|
| 45 | 1.65 | 16.5 → Abaixo do peso |
| 60 | 1.70 | 20.8 → Peso ideal |
| 78 | 1.65 | 28.7 → Sobrepeso |
| 95 | 1.70 | 32.9 → Obesidade Grau I |

---

## 📸 Captura de tela (opcional)

*(adicione aqui uma imagem da interface, ex: `Img/captura.png`)*

---

## 📚 Fontes e referências

- [Ministério da Saúde – IMC](https://www.gov.br/saude/pt-br)
- [Font Awesome Icons](https://fontawesome.com/)
- [Documentação MDN JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

## 👩‍💻 Autora

**Emanuella de Fátima Oliveira de Sousa**
**Diuli Endy Porfírio Pinheiro**
📧 Projeto desenvolvido para fins de estudo e prática em desenvolvimento web.

---

✨ *"Pequenos projetos constroem grandes programadores."*
