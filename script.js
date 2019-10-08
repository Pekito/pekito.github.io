const controles = document.getElementById('controles');
const cssCodigo = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);

const handleStyle = {
  element: btn,
  backgroundColor(valor) {
    this.element.style.backgroundColor = valor;
  },
  height(valor) {
    this.element.style.height = valor + 'px';
  },
  width(valor) {
    this.element.style.width = valor + 'px';
  },
  texto(valor) {
    this.element.innerText = valor;
  },
  color(valor) {
    this.element.style.color = valor;
  },
  border(valor) {
    this.element.style.border = valor;
  },
  borderRadius(valor) {
    this.element.style.borderRadius = valor + 'px';
  },
  fontFamily(valor) {
    this.element.style.fontFamily = valor;
  },
  fontSize(valor) {
    this.element.style.fontSize = valor + 'px';
  },
}

function handleChange(event) {
  const nome = event.target.name;
  const valor = event.target.value;

  handleStyle[nome](valor);
  salvarValor(nome, valor);
  showCss();
}

function salvarValor(nome, valor) {
  localStorage[nome] = valor;
}

function setValores() {
  const propriedades = Object.keys(localStorage);
  propriedades.forEach(propriedade => {
    handleStyle[propriedade](localStorage[propriedade]);
    controles.elements[propriedade].value = localStorage[propriedade];
  });
  showCss();
}

setValores();

function showCss() {
  cssCodigo.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}