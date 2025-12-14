// Telegram Config
const TELEGRAM_BOT_TOKEN = '8563406461:AAEazFZQDYhrmBzUmI-epRJ5a0Q6mIc2dIo';
const TELEGRAM_CHAT_ID = '8565578320';

// Notif
function showNotif(msg) {
  const n = document.getElementById('notif');
  n.textContent = msg;
  n.classList.add('show');
  setTimeout(() => n.classList.remove('show'), 3000);
}

// Menu
function toggleMenu() {
  document.getElementById('menuToggle').classList.toggle('active');
  document.getElementById('dropdownMenu').classList.toggle('active');
}

// Page Navigation
function showPaymentPage() {
  document.getElementById('landingPage').style.display = 'none';
  document.getElementById('paymentPage').style.display = 'block';
}

function showLandingPage() {
  document.getElementById('paymentPage').style.display = 'none';
  document.getElementById('sendProofPage').style.display = 'none';
  document.getElementById('landingPage').style.display = 'block';
}

function showSendProofPage() {
  document.getElementById('landingPage').style.display = 'none';
  document.getElementById('paymentPage').style.display = 'none';
  document.getElementById('sendProofPage').style.display = 'block';
}

// Copy
function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text);
  btn.innerText = 'Tersalin!';
}

// Theme
function toggleTheme() {
  document.body.classList.toggle('light-mode');
}

// Music
function playMusic() {
  const audio = document.getElementById('backgroundMusic');
  audio.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  audio.play();
}

function stopMusic() {
  const audio = document.getElementById('backgroundMusic');
  audio.pause();
  audio.currentTime = 0;
}

// Submit Proof
async function submitProof(e) {
  e.preventDefault();
  showNotif('Bukti terkirim (demo)');
}

// Particles
particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    size: { value: 3 }
  }
});
