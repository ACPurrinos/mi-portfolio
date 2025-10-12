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
  'System.out.println("Bienvenido a mi portfolio");',
  
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



document.addEventListener('DOMContentLoaded', () => {
  const terminal = document.getElementById('terminal-msg');
  const msg = 'System.out.println("Si querés contactarme, podés encontrarme en mis redes aquí abajo:");';
  
  // Crear el cursor parpadeante
  const cursor = document.createElement('span');
  cursor.classList.add('cursor');
  cursor.textContent = '|';
  terminal.parentNode.appendChild(cursor);

  function typeEffect(element, message, speed = 50) {
    let i = 0;
    function type() {
      if (i < message.length) {
        element.textContent = message.substring(0, i + 1);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  // Hacer que el cursor parpadee
  setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
  }, 500);

  // Observer para disparar la animación solo cuando la sección contacto sea visible
  const contactoSection = document.getElementById('contacto');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeEffect(terminal, msg);
        observer.unobserve(contactoSection); // se ejecuta solo una vez
      }
    });
  }, { threshold: 0.5 }); // 50% de la sección visible

  observer.observe(contactoSection);
});








