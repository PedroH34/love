// DATA DE INÍCIO DO RELACIONAMENTO
// 01/05/2026 = new Date(2026, 4, 1, 0, 0)
// Observação: no JavaScript, maio é 4 porque janeiro começa em 0.

const dataInicio = new Date(2026, 4, 1, 0, 0);

function atualizarContador() {
const contador = document.getElementById("contador");

if (!contador) return;

const agora = new Date();
let diff = agora - dataInicio;

if (diff < 0) {
contador.innerHTML = `       <div class="contador-box">         <div><strong>0</strong><span>Dias</span></div>         <div><strong>0</strong><span>Horas</span></div>         <div><strong>0</strong><span>Min</span></div>         <div><strong>0</strong><span>Seg</span></div>       </div>
    `;
return;
}

const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
diff -= dias * (1000 * 60 * 60 * 24);

const horas = Math.floor(diff / (1000 * 60 * 60));
diff -= horas * (1000 * 60 * 60);

const minutos = Math.floor(diff / (1000 * 60));
diff -= minutos * (1000 * 60);

const segundos = Math.floor(diff / 1000);

contador.innerHTML = `     <div class="contador-box">       <div><strong>${dias}</strong><span>Dias</span></div>       <div><strong>${horas}</strong><span>Horas</span></div>       <div><strong>${minutos}</strong><span>Min</span></div>       <div><strong>${segundos}</strong><span>Seg</span></div>     </div>
  `;
}

setInterval(atualizarContador, 1000);
atualizarContador();

function abrirSurpresa() {
const conteudo = document.getElementById("conteudo-surpresa");
const rodape = document.getElementById("rodape-surpresa");
const botao = document.getElementById("btn-surpresa");

if (!conteudo) {
alert("Erro: conteúdo da surpresa não encontrado.");
return;
}

if (botao) {
botao.style.display = "none";
}

conteudo.style.display = "block";

if (rodape) {
rodape.style.display = "block";
}

setTimeout(() => {
conteudo.scrollIntoView({
behavior: "smooth"
});
}, 250);
}

// GALERIA COM FOTO AMPLIADA

const fotos = Array.from(document.querySelectorAll(".photo img"));
let fotoAtual = 0;

if (fotos.length > 0) {
const modal = document.createElement("div");
modal.className = "modal";

modal.innerHTML = `     <button class="modal-btn close" aria-label="Fechar">×</button>     <button class="modal-btn prev" aria-label="Foto anterior">‹</button>     <img src="" alt="Foto ampliada">     <button class="modal-btn next" aria-label="Próxima foto">›</button>
  `;

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

```
if (event.key === "Escape") fecharModal();
if (event.key === "ArrowRight") proximaFoto();
if (event.key === "ArrowLeft") fotoAnterior();
```

});
}
