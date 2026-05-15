import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    // 1. INTERACTIVIDAD BÁSICA (Animaciones de scroll usando Vanilla JS IntersectionObserver)
    const fadeElements = document.querySelectorAll('.fade-in-up');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Permite que se vuelva a animar cuando vuelves a hacer scroll hacia arriba
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(el => observer.observe(el));

    // 2. INTERACTIVIDAD DEL VIDEO
    const videoSection = document.getElementById('video-section');
    const videoContainer = document.getElementById('video-container');

    if (videoSection) {
        // Efecto hover sutil en toda la sección
        videoSection.addEventListener('mouseenter', () => {
            videoSection.style.transform = 'scale(1.02)';
        });
        videoSection.addEventListener('mouseleave', () => {
            videoSection.style.transform = 'scale(1)';
        });
    }

    if (videoContainer) {
        // Evento de click para la miniatura del video
        videoContainer.addEventListener('click', () => {
            // Como el autor bloqueó incrustarlo en iframes (Error 153), 
            // la mejor interactividad alternativa es enviarlo al enlace original
            window.open('https://www.youtube.com/watch?v=dLuhiB1-gCk', '_blank');
        });
    }
});
