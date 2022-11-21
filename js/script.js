
const hamburger = document.querySelector('.hamburger');
const headerNavigation = document.querySelector('.header__navigation');


hamburger.addEventListener('click', function(e) {
  hamburger.classList.toggle('is-active');
  headerNavigation.classList.toggle('is-active-navigation');
})