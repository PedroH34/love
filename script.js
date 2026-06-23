// ALTERE A DATA ABAIXO PARA A DATA DE INÍCIO DO RELACIONAMENTO
// Formato: new Date(ANO, MÊS - 1, DIA, HORA, MINUTO)
// Exemplo: 15/06/2023 = new Date(2023, 5, 15, 0, 0)

const dataInicio = new Date(2026, 5, 1, 5, 0);

function atualizarContador() {
const contador = document.getElementById("contador");

if (!contador) return;

const agora = new Date();
let diff = agora - dataInicio;

if (diff < 0) {
contador.textContent = "A data configurada está no futuro.";
return;
}

const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
diff -= dias * (1000 * 60 * 60 * 24);

const horas = Math.floor(diff / (1000 * 60 * 60));
diff -= horas * (1000 * 60 * 60);

const minutos = Math.floor(diff / (1000 * 60));
diff -= minutos * (1000 * 60);

const segundos = Math.floor(diff / 1000);

contador.innerHTML = `     <div class="contador-box">       <div><strong>${dias}</strong><span>dias</span></div>       <div><strong>${horas}</strong><span>horas</span></div>       <div><strong>${minutos}</strong><span>min</span></div>       <div><strong>${segundos}</strong><span>seg</span></div>     </div>
  `;
}

setInterval(atualizarContador, 1000);
atualizarContador();

/* MODAL DA GALERIA */

const fotos = Array.from(document.querySelectorAll(".photo img"));
let fotoAtual = 0;

const modal = document.createElement("div");
modal.className = "modal";
modal.innerHTML = `  <button class="modal-btn close" aria-label="Fechar">×</button>   <button class="modal-btn prev" aria-label="Foto anterior">‹</button>   <img src="" alt="Foto ampliada">   <button class="modal-btn next" aria-label="Próxima foto">›</button>`;

document.body.appendChild(modal);

const modalImg = modal.querySelector("img");
const btnClose = modal.querySelector(".close");
const btnPrev = modal.querySelector(".prev");
const btnNext = modal.querySelector(".next");

function abrirModal(index) {
fotoAtual = index;
modalImg.src = fotos[fotoAtual].src;
modal.classList.add("active");
document.body.style.overflow = "hidden";
}

function fecharModal() {
modal.classList.remove("active");
document.body.style.overflow = "";
}

function proximaFoto() {
fotoAtual = (fotoAtual + 1) % fotos.length;
modalImg.src = fotos[fotoAtual].src;
}

function fotoAnterior() {
fotoAtual = (fotoAtual - 1 + fotos.length) % fotos.length;
modalImg.src = fotos[fotoAtual].src;
}

fotos.forEach((foto, index) => {
foto.addEventListener("click", () => abrirModal(index));
});

btnClose.addEventListener("click", fecharModal);
btnNext.addEventListener("click", proximaFoto);
btnPrev.addEventListener("click", fotoAnterior);

modal.addEventListener("click", (event) => {
if (event.target === modal) {
fecharModal();
}
});

document.addEventListener("keydown", (event) => {
if (!modal.classList.contains("active")) return;

if (event.key === "Escape") fecharModal();
if (event.key === "ArrowRight") proximaFoto();
if (event.key === "ArrowLeft") fotoAnterior();
});
