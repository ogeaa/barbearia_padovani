// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // Se for #inicio ou #, scroll para o topo
        if (href === '#inicio' || href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        // Para outros links, procurar o elemento
        const target = document.querySelector(href);
        if (target) {
            // Ajustar offset para o header fixo
            const headerHeight = document.querySelector('.header')?.offsetHeight || 70;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Modal da galeria
function openModal(imageSrc) {
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    document.body.style.overflow = 'hidden'; // Previne scroll do body
}

function closeModal() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restaura scroll do body
}

// Fechar modal ao clicar fora
document.getElementById('galleryModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Fechar modal com ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Animação ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.service-card, .benefit-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Mostrar botão WhatsApp após scroll
let whatsappBtn = document.querySelector('.whatsapp-btn');
if (whatsappBtn) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            whatsappBtn.style.display = 'flex';
        } else {
            whatsappBtn.style.display = 'none';
        }
    });
    
    // Inicialmente escondido
    whatsappBtn.style.display = 'none';
}


// Header scroll effect
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

