(function(){
  const clock = document.getElementById('clock');
  function tick(){
    if(!clock) return;
    const d = new Date();
    clock.textContent = d.toLocaleString(undefined,{weekday:'short',hour:'2-digit',minute:'2-digit',second:'2-digit'});
  }
  tick(); setInterval(tick,1000);

  const widgetScroll = document.querySelector('.widget-scroll');
  const prevBtn = document.querySelector('.widget-nav-btn.prev');
  const nextBtn = document.querySelector('.widget-nav-btn.next');
  if (widgetScroll && prevBtn && nextBtn) {
    const scrollAmount = 220;
    prevBtn.addEventListener('click', () => widgetScroll.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => widgetScroll.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
    function updateNavButtons() {
      prevBtn.style.opacity = widgetScroll.scrollLeft > 10 ? '1' : '0.35';
      nextBtn.style.opacity = widgetScroll.scrollLeft < (widgetScroll.scrollWidth - widgetScroll.clientWidth - 10) ? '1' : '0.35';
    }
    widgetScroll.addEventListener('scroll', updateNavButtons);
    window.addEventListener('resize', updateNavButtons);
    updateNavButtons();
  }

  const switchVercel = document.getElementById('switchVercel');
  if (switchVercel) {
    switchVercel.addEventListener('click', function() {
      this.style.transform = 'scale(0.96)';
      setTimeout(() => { this.style.transform = ''; }, 160);
    });
  }

  const cursorToggle = document.getElementById('cursorToggle');
  if (cursorToggle) {
    cursorToggle.addEventListener('click', function() {
      document.body.classList.toggle('foxor-cursor-enabled');
      this.textContent = document.body.classList.contains('foxor-cursor-enabled') ? 'Hide Foxy Cursor' : 'Toggle Foxy Cursor';
    });
  }

  /* Styles feature */
  const styleSelect = document.getElementById('styleSelect');
  const STYLE_KEY = 'foxphantom-style';
  function applyStyle(name) {
    const valid = ['default', 'playful', 'scifi'];
    const style = valid.includes(name) ? name : 'default';
    document.body.setAttribute('data-style', style);
    if (styleSelect) styleSelect.value = style;
    try { localStorage.setItem(STYLE_KEY, style); } catch (_) {}
  }
  if (styleSelect) {
    let saved = 'default';
    try { saved = localStorage.getItem(STYLE_KEY) || 'default'; } catch (_) {}
    applyStyle(saved);
    styleSelect.addEventListener('change', function() {
      applyStyle(this.value);
    });
  }

  /* Packed links — hover opens via CSS; click/touch toggles .is-open for mobile */
  const packedLinks = document.getElementById('packedLinks');
  const packedBtn = document.getElementById('packedBtn');
  if (packedLinks && packedBtn) {
    packedBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const open = packedLinks.classList.toggle('is-open');
      packedBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function(e) {
      if (packedLinks.classList.contains('is-open') && !packedLinks.contains(e.target)) {
        packedLinks.classList.remove('is-open');
        packedBtn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && packedLinks.classList.contains('is-open')) {
        packedLinks.classList.remove('is-open');
        packedBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
