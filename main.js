const form = document.getElementById('principal');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  var numA = document.getElementById('per').value;
  var numB = document.getElementById('met').value;
  let mensagem = `<b>${numB}</b> é maior que <b>${numA}</b> então <b>PODE</b> jogar.`;
  let err = `<b>${numB}</b> é menor que <b>${numA}</b> então <b>NÃO</b> pode jogar.`;
  let mensagemigual = `Os números precisam ser diferentes.`;
  numA = Number(numA);
  numB = Number(numB);
  

  if (numB > numA) {
    var dispMess = document.querySelector('.mensagem-sucesso');
      dispMess.innerHTML = mensagem;
      dispMess.style.display = 'block';
  }

  else {
    var messDisp = document.querySelector('.mensagem-sucesso');
    messDisp.innerHTML = err;
    messDisp.style.display = 'block';
  }

  if (numB === numA) {
    var igg = document.querySelector('.mensagem-sucesso');
    igg.innerHTML = mensagemigual;
    igg.style.display = 'block';
  }
});