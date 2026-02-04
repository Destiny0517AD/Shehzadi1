// Soft floating sparkles
setInterval(() => {
  const sparkle = document.createElement('div');
  sparkle.innerHTML = '✨';
  sparkle.style.position = 'fixed';
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.top = '100vh';
  sparkle.style.fontSize = '18px';
  sparkle.style.animation = 'rise 6s linear';
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 6000);
}, 600);

const style = document.createElement('style');
style.innerHTML = `
@keyframes rise {
  to {
    transform: translateY(-110vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
