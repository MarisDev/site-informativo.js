// Navegaçao
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//nav on scroll
let lastScrollPosition = 0;
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    lastScrollPosition = scrollPosition;
});

// Membros
const membersData = [
    {
        name: 'Anthony Kiedis',
        role: 'Vocalista',
        icon: 'imagem/anthony.jpg',
        bio: 'Cofundador e vocalista da banda desde 1983. Conhecido por seu estilo único de rap-rock e letras autobiográficas.',
        years: '1983 - Presente',
        color: 'linear-gradient(to bottom right, #ef4444, #f97316)'
    },
    {
        name: 'Flea',
        role: 'Baixista',
        icon: 'imagem/flea.jpg',
        bio: 'Michael Peter Balzary, conhecido como Flea, é o baixista virtuoso e cofundador. Seu estilo funk é a marca registrada da banda.',
        years: '1983 - Presente',
        color: 'linear-gradient(to bottom right, #f97316, #eab308)'
    },
    {
        name: 'John Frusciante',
        role: 'Guitarrista',
        icon: 'imagem/jhon.jpg',
        bio: 'Guitarrista talentoso que teve múltiplas passagens pela banda. Retornou em 2019 para alegria dos fãs.',
        years: '1988-1992, 1998-2009, 2019-Presente',
        color: 'linear-gradient(to bottom right, #a855f7, #ec4899)'
    },
    {
        name: 'Chad Smith',
        role: 'Baterista',
        icon: 'imagem/chad.jpg',
        bio: 'Baterista poderoso desde 1988. Conhecido por sua energia e por sua semelhança com o ator Will Ferrell.',
        years: '1988 - Presente',
        color: 'linear-gradient(to bottom right, #3b82f6, #06b6d4)'
    }
];

const memberButtons = document.querySelectorAll('.member-button');
const memberName = document.getElementById('member-name');
const memberRole = document.getElementById('member-role');
const memberYears = document.getElementById('member-years');
const memberBio = document.getElementById('member-bio');
const memberIcon = document.getElementById('member-icon');

memberButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        memberButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const member = membersData[index];
        
        memberName.textContent = member.name;
        memberRole.textContent = member.role;
        memberYears.textContent = member.years;
        memberBio.textContent = member.bio;
        memberIcon.style.background = member.color;

        const img = memberIcon.querySelector('img');
    img.src = member.icon;
    img.alt = member.name;

    memberIcon.style.background = member.color;
    });
});

//curiosidades
const curiosityCards = document.querySelectorAll('.curiosity-card');

curiosityCards.forEach(card => {
    const toggleButton = card.querySelector('.curiosity-toggle');
    
    toggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = card.getAttribute('data-expanded') === 'true';
        
        card.setAttribute('data-expanded', !isExpanded);
        toggleButton.textContent = isExpanded ? 'Ler mais →' : 'Ver menos';
    });
    
    card.addEventListener('click', () => {
        const isExpanded = card.getAttribute('data-expanded') === 'true';
        
        card.setAttribute('data-expanded', !isExpanded);
        const toggleButton = card.querySelector('.curiosity-toggle');
        toggleButton.textContent = isExpanded ? 'Ler mais →' : 'Ver menos';
    });
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
document.querySelectorAll('.milestone-card, .album-card, .curiosity-card, .member-button').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// scroll biografia
const heroButton = document.querySelector('.hero-button');
if (heroButton) {
    heroButton.addEventListener('click', () => {
        document.getElementById('biography').scrollIntoView({ behavior: 'smooth' });
    });
}