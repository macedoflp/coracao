function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = "❤️"; // Emoji de coração
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// Funções para abrir e fechar o modal
function showModal() {
  const modal = document.getElementById("modal");
  const audio = document.getElementById("loveAudio");
  modal.style.display = "flex";
  audio.play(); // Reproduz o áudio ao abrir o modal
  audio.currentTime = 0; // Garante que o áudio comece do início
}

function closeModal() {
  const modal = document.getElementById("modal");
  const audio = document.getElementById("loveAudio");
  modal.style.display = "none";
  audio.pause(); // Pausa o áudio ao fechar o modal
  audio.currentTime = 0; // Reseta o áudio ao início
}
