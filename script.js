// ALTERE A DATA ABAIXO PARA A DATA DE INÍCIO DO RELACIONAMENTO
// Formato: new Date(ANO, MÊS - 1, DIA, HORA, MINUTO)
// Exemplo: 15/06/2023 = new Date(2023, 5, 15, 0, 0)

const dataInicio = new Date(2024, 0, 1, 0, 0);

function atualizarContador() {
  const agora = new Date();
  let diff = agora - dataInicio;

  if (diff < 0) {
    document.getElementById("contador").textContent = "A data configurada está no futuro.";
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= dias * (1000 * 60 * 60 * 24);

  const horas = Math.floor(diff / (1000 * 60 * 60));
  diff -= horas * (1000 * 60 * 60);

  const minutos = Math.floor(diff / (1000 * 60));
  diff -= minutos * (1000 * 60);

  const segundos = Math.floor(diff / 1000);

  document.getElementById("contador").innerHTML =
    `${dias} dias<br><span>${horas}h ${minutos}m ${segundos}s</span>`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
