document.addEventListener('DOMContentLoaded', function () {
    // Back-to-top button
    const topBtn = document.getElementById('topBtn');
    if (topBtn) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 220) topBtn.style.display = 'block';
        else topBtn.style.display = 'none';
      });
      topBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    // Resume download button
    const resumeBtn = document.getElementById('resumeDownload');
    if (resumeBtn) {
      resumeBtn.addEventListener('click', function () {
        // opens resume.pdf (placeholder)
        window.open('resume - Copy.png', '_blank');
      });
    }
  
    // Initialize AOS if it loaded
    if (window.AOS && typeof window.AOS.init === 'function') {
      AOS.init({ duration: 800, once: true });
    }
  });
  