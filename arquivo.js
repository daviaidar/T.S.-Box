// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    font-size: 1.5em;
    background-color: #ff0000;
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 1000;
`;
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show Back-to-Top Button on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Fade-in Animations
const elementsToAnimate = document.querySelectorAll('section, img, table');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.8s ease';
    observer.observe(element);
});

// Highlight Active Section Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Style for Active Link
const style = document.createElement('style');
style.textContent = `
    nav a.active {
        font-weight: bold;
        color: #ff0000;
        border-bottom: 2px solid #ff0000;
    }
`;
document.head.appendChild(style);





document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {
        document.getElementById("feedback").style.display = "block";
        setTimeout(() => {
            document.getElementById("feedback").style.display = "none";
        }, 3000);
        e.target.reset(); // Reseta o formulário
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Modo Claro";
    } else {
        toggleButton.textContent = "Modo Escuro";
    }
});

// Estilos para modo escuro
const darkModeStyle = document.createElement("style");
darkModeStyle.textContent = `
    .dark-mode {
        background-color: #222;
        color: #fff;
    }
    .dark-mode header,
    .dark-mode footer {
        background-color: #333;
    }
`;
document.head.appendChild(darkModeStyle);
const text = "Bem-vindo à T.S. BOX!";
const typingElement = document.getElementById("typingEffect");
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Ajuste o tempo para a velocidade de digitação
    }
}

typeText();

