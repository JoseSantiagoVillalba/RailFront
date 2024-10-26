
const divs = [
  { element: document.getElementById('myDiv'), className: 'visible' },
  { element: document.getElementById('myDiv2'), className: 'visible2' },
  { element: document.getElementById('myDiv3'), className: 'visible3' },
  { element: document.getElementById('myDiv4'), className: 'visible4' },
];


// Verificar si al menos parte del elemento está en el viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom > 0
  );
}

// Función que se ejecuta al hacer scroll
function onScroll() {
  divs.forEach(div => {
      if (isInViewport(div.element)) {
          div.element.classList.add(div.className);
      }
  });
}

// Llamar a la función cuando el usuario haga scroll
window.addEventListener('scroll', onScroll);

document.getElementById('hamburger').addEventListener('click', function () {
  var modal = document.getElementById('modal');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
});

