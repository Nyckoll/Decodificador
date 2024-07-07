const textarea = document.querySelector('.js-textarea');
const retangulo = document.querySelector('.retangulo');
const botaoCodificar = document.querySelector('.botao');
const botaoDecodificar = document.querySelector('.botao2');

const textoRetangulo = document.getElementById('texto-retangulo');

botaoCodificar.addEventListener('click', () => {
  const texto = textarea.value.trim();
  if (texto) {
    try {
      const textoCodificado = codificar(texto);
      textoRetangulo.textContent = textoCodificado;
    } catch (error) {
      alert(error.message);
    }
  }
});

botaoDecodificar.addEventListener('click', () => {
  const texto = textarea.value.trim();
  if (texto) {
    try {
      const textoDecodificado = decodificar(texto);
      textoRetangulo.textContent = textoDecodificado;
    } catch (error) {
      alert(error.message);
    }
  }
});

function verificaRequisitos(texto) {
    const requisitos = [
      { regex: /^[a-zA-Z0-9\s]+$/, message: 'Apenas letras, números e espaços são permitidos' },
      { regex: /^.{1,100}$/, message: 'O texto deve ter entre 1 e 100 caracteres' },
    ];
  
    for (const requisito of requisitos) {
      if (!requisito.regex.test(texto)) {
        throw new Error(requisito.message);
      }
    }
  }

function codificar(texto) {
    const substituicoes = {
      'e': 'enter',
      'i': 'imes',
      'a': 'ai',
      'o': 'ober',
      'u': 'ufat'
    };
    return texto.split('').map(letra => substituicoes[letra] || letra).join('');
  }
  
  function decodificar(textoCodificado) {

    const substituicoes = {
      'enter': 'e',
      'imes': 'i',
      'ai': 'a',
      'ober': 'o',
      'ufat': 'u'
    };
    return textoCodificado.replace(new RegExp(Object.keys(substituicoes).join('|'), 'g'), match => substituicoes[match]);
  }