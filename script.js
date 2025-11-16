// script.js – Final with Scroll Fade-In + Persistent Dark Mode
document.addEventListener('DOMContentLoaded', () => {
  // === BACK TO TOP ===
  const topBtn = document.getElementById('topBtn');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // === RESUME DOWNLOAD (index only) ===
  const resumeBtn = document.getElementById('resumeDownload');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      window.open('resume - Copy.png', '_blank');
    });
  }

  // === DARK MODE – ALL PAGES ===
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const applyTheme = (isDark) => {
      document.documentElement.classList.toggle('dark', isDark);
      document.body.classList.toggle('dark', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      applyTheme(true);
    }

    toggle.addEventListener('click', () => {
      const isDark = !document.documentElement.classList.contains('dark');
      applyTheme(isDark);
    });
  }

  // === SKILL BAR ANIMATION (index only) ===
  const skills = document.querySelectorAll('.skill-fill');
  if (skills.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const w = entry.target.style.width;
          entry.target.style.width = '0%';
          setTimeout(() => entry.target.style.width = w, 100);
        }
      });
    }, { threshold: 0.5 });
    skills.forEach(s => observer.observe(s));
  }

  // === SCROLL FADE-IN FOR ALL SECTIONS (index only) ===
  const fadeIns = document.querySelectorAll('.fade-in');
  if (fadeIns.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    fadeIns.forEach((el, i) => {
      el.style.transitionDelay = `${i * 100}ms`;
      observer.observe(el);
    });
  }
});