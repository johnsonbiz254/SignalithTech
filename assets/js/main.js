// Year in footer
document.getElementById('yr').textContent = new Date().getFullYear();

// Animate dial and bars on page load
window.addEventListener('load', () => {
  const dialNum = document.getElementById('dialNum');
  if (dialNum) {
    document.querySelectorAll('.bar-fill').forEach(el => {
      requestAnimationFrame(() => { el.style.width = el.dataset.w + '%'; });
    });
    const target = 67, el = dialNum;
    let cur = 0;
    const step = () => {
      cur += Math.ceil((target - cur) / 6) || 1;
      if (cur >= target) { el.textContent = target; return; }
      el.textContent = cur;
      setTimeout(step, 40);
    };
    step();
  }
});

// Form submission
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    btn.textContent = 'Sent, thank you';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Request assessment';
      btn.disabled = false;
      this.reset();
    }, 3000);
  });
});
