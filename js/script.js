// ========================================
// MENÚ HAMBURGUESA
// ========================================
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const hamIcon = document.querySelector('.header__main-ham-menu');
const closeIcon = document.querySelector('.header__main-ham-menu-close');
const menuLinks = document.querySelectorAll('.header__sm-menu-link');

// Función para abrir/cerrar menú
const toggleMenu = () => {
  smallMenu.classList.toggle('header__sm-menu--active');
  hamIcon.classList.toggle('d-none');
  closeIcon.classList.toggle('d-none');
};

// Abrir/cerrar menú al hacer click en el ícono
hamMenuBtn.addEventListener('click', toggleMenu);

// Cerrar menú al hacer click en un enlace
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    hamIcon.classList.remove('d-none');
    closeIcon.classList.add('d-none');
  });
});

// Cerrar menú automáticamente si la ventana se agranda
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    smallMenu.classList.remove('header__sm-menu--active');
    hamIcon.classList.remove('d-none');
    closeIcon.classList.add('d-none');
  }
});

// Redirigir al hacer click en el logo
const logoContainer = document.querySelector('.header__logo-container');
logoContainer.addEventListener('click', () => {
  location.href = '/';
});


const codeLines = [
  'System.out.println("Bienvenido a mi portfolio.");',
  
];

const outputEl = document.getElementById('console-output');
let lineIndex = 0;

function typeLine(line, charIndex = 0) {
  if (charIndex < line.length) {
    outputEl.innerHTML += line[charIndex];
    setTimeout(() => typeLine(line, charIndex + 1), 50); // velocidad de tipeo
  } else {
    outputEl.innerHTML += '\n'; // salto de línea
    lineIndex++;
    if (lineIndex < codeLines.length) {
      setTimeout(() => typeLine(codeLines[lineIndex]), 200); // delay entre líneas
    }
  }
}

// iniciar animación
typeLine(codeLines[lineIndex]);

// Animación al hacer scroll
const skills = document.querySelectorAll('.skill');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

skills.forEach(skill => observer.observe(skill));

const projectItems = document.querySelectorAll('.project-item');

const projectObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

projectItems.forEach(item => projectObserver.observe(item));






document.addEventListener("DOMContentLoaded", () => {
  const contactoSection = document.querySelector("#contacto");
  const apiSim = document.querySelector("#api-simulation code");

  const lines = [
    '> GET https://api.andrea.dev/contact',
    '🛰️  Enviando solicitud...',
    '✅  200 OK',
    
    '{',
    '  "nombre": "Andrea Purriños",',
    '  "rol": "Software Developer Jr",',
    '  "contacto": {',
    '    "email": "xxxxxxx@tuemail.com",',
    '    "linkedin": "linkedin.com/in/xxx",',
    '    "github": "github.com/ACPurrinos"',
    '  },',
    '  "saludo": "¡Gracias por visitar mi portfolio!"',
    '}',
  
  ];

  function startApiAnimation() {
    apiSim.textContent = ''; // limpia el contenido actual
    let i = 0;

    function typeLine() {
      const line = lines[i];
      let charIndex = 0;

      function typeChar() {
        apiSim.textContent += line[charIndex];
        charIndex++;
        if (charIndex < line.length) {
          setTimeout(typeChar, 25); // velocidad por carácter
        } else {
          apiSim.textContent += '\n';
          i++;
          if (i < lines.length) {
            setTimeout(typeLine, 80); // pausa entre líneas
          }
        }
      }

      typeChar();
    }

    typeLine();
  }

  // Detectar cuando la sección contacto entra al viewport
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startApiAnimation();
          observer.unobserve(contactoSection);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(contactoSection);
});









