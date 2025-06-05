function getNameFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('name') || 'Favour';
}

function playSequence() {
  const flap = document.querySelector('.flap');
  const letter = document.querySelector('.letter');
  const envelopeContainer = document.getElementById('envelope-container');
  const landing = document.getElementById('landing');
  const welcomeText = document.getElementById('welcome');

  const name = getNameFromURL();
  welcomeText.textContent = `Welcome, ${name}!`;

  // Animate flap and letter
  flap.style.animation = 'openFlap 2s ease forwards';
  letter.style.animation = 'revealLetter 2s ease 2s forwards';

  // Fade out envelope container
  setTimeout(() => {
    envelopeContainer.style.transition = 'opacity 1s ease';
    envelopeContainer.style.opacity = 0;
  }, 4000);

  // After fade out, switch views and fade in landing
  setTimeout(() => {
    envelopeContainer.style.display = 'none';
    landing.classList.remove('hidden');
    
    // Give browser a moment to register display change
    setTimeout(() => {
      landing.style.opacity = 1;
    }, 50);
  }, 5000);
}

// Auto-start
window.onload = playSequence;

// Keyframes (optional inline setup)
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes openFlap {
    0% { transform: rotateX(0); }
    100% { transform: rotateX(-120deg); }
  }

  @keyframes revealLetter {
    to { opacity: 1; }
  }
`;
document.head.appendChild(styleSheet);
