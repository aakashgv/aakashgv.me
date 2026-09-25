(function () {
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.classList.add('dark');
  }
  document.getElementById('theme-toggle').addEventListener('click', function () {
    root.classList.toggle('dark');
    try { localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light'); } catch (e) {}
  });
  var el = document.getElementById('years-kicking');
  if (el) {
    var birth = new Date(1999, 8, 28).getTime(); // 28-09-1999
    var yearMs = 365.2425 * 24 * 60 * 60 * 1000;
    (function tick() {
      el.textContent = ((Date.now() - birth) / yearMs).toFixed(8);
      setTimeout(tick, 80);
    })();
  }
})();
