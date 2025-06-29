document.querySelectorAll('.neon-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const url = btn.dataset.url;
    if (url) {
      window.open(url, '_blank');
    }
  });
});

// Optional: Mouse-based neon glow follower
const overlay = document.querySelector('.overlay');
window.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth * 100;
  const y = e.clientY / window.innerHeight * 100;
  overlay.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0,0,63,0.2), rgba(0,0,0,0.9))`;
});
