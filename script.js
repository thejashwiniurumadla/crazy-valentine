const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// YES button runs away (page 2 only)
if (yesBtn) {
  function moveYes() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    yesBtn.style.left = x + "px";
    yesBtn.style.top = y + "px";
  }

  yesBtn.addEventListener("mouseover", moveYes);
  yesBtn.addEventListener("touchstart", moveYes);
}

// NO button redirect
if (noBtn) {
  noBtn.addEventListener("click", () => {
    window.location.href = "result.html";
  });
}

// Emoji floating (ALL pages)
const emojis = ["💖", "💕", "✨", "😍", "🥰", "😳"];
const container = document.querySelector(".hearts");

if (container) {
  setInterval(() => {
    const e = document.createElement("span");
    e.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    e.style.left = Math.random() * 100 + "vw";
    e.style.fontSize = Math.random() * 25 + 18 + "px";

    container.appendChild(e);

    setTimeout(() => e.remove(), 6000);
  }, 350);
}
