window.onload = init;

function init() {
  
  var toggleMenu = document.querySelector('svg');
  var lista = document.querySelector('.lista');

  toggleMenu.addEventListener('click', function(e) {
    lista.style.display = (lista.style.display) ? '' : 'block';
  });


}