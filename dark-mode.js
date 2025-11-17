document.addEventListener('DOMContentLoaded', function () {
  const key = 'site-theme';
  const btn = document.getElementById('darkToggle');
  if (!btn) return;

  // Set initial state based on presence of .dark
  btn.setAttribute('aria-pressed', document.documentElement.classList.contains('dark') ? 'true' : 'false');

  btn.addEventListener('click', function () {
    const isDark = document.documentElement.classList.toggle('dark');
    try { localStorage.setItem(key, isDark ? 'dark' : 'light'); } catch (e) {}
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  });
});

