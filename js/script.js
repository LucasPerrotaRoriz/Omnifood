// Mobile
const hamburger = document.querySelector(".hamburger");
const headerNavigation = document.querySelector(".header__navigation");

hamburger.addEventListener("click", function (e) {
  hamburger.classList.toggle("is-active");
  headerNavigation.classList.toggle("is-active--mobile");
});

// Smooth scrolling
document.querySelector('.header__list').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('hey')
  // Matching strategy
  if (e.target.classList.contains('header__link')) {
    console.log('hi')
    const id = e.target.getAttribute('href');
    console.log(id)
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Sticky nav
const headerHeight = document.querySelector('.header').getBoundingClientRect().height;
const sectionHero = document.querySelector('.section-hero');

const stickyNav = function(entries) {
  const [entry] = entries;
  console.log(entry);
  if(!entry.isIntersecting) document.body.classList.add("sticky");
  else document.body.classList.remove("sticky");
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

heroObserver.observe(sectionHero);