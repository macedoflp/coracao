// Função para criar corações flutuantes
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
  
  // Adiciona corações a cada 300ms
  setInterval(createHeart, 300);
  
  // Funções para abrir e fechar o modal
  function showModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
  }
  
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  