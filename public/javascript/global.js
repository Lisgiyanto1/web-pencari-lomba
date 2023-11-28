const navLinks = document.querySelector('.nav-links');
function onToggleMenu(e) {
  e.name = e.name === 'menu' ? 'close' : 'menu';
  navLinks.classList.toggle('top-[9%]');
}

// AOS
AOS.init({
  duration: 1200,
});
