// Defina a data final do contador (Ano, Mês [0-11], Dia, Hora, Minuto)
const dataAlvo = new Date("Oct 31, 2026 16:00:00").getTime();

const atualizarContador = setInterval(function() {
  const agora = new Date().getTime();
  const diferenca = dataAlvo - agora;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = String(dias).padStart(2, '0');
  document.getElementById("hours").innerText = String(horas).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutos).padStart(2, '0');
  document.getElementById("seconds").innerText = String(segundos).padStart(2, '0');

  if (diferenca < 0) {
    clearInterval(atualizarContador);
    document.getElementById("countdown").innerHTML = "<h2>O evento começou!</h2>";
  }
}, 1000);
