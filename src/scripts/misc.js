const map = document.getElementById('map-container');

if (map) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2ee8c0203e8011213a31527b420f11402ed2094b98b1d44e5451baad578b10f3&width=100%25&;height=100%&lang=ru_RU&scroll=true';

  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= map.offsetTop - 2000) map.append(script);
  });
}

const headerDropdown = document.querySelectorAll('#header .header__nav .dropdown');

headerDropdown.forEach((dropdown) => {
  let dropdownTimer = null;

  if (window.matchMedia('(min-width: 1200px)').matches) {
    dropdown.addEventListener('mouseenter', () => {
      dropdown.classList.add('dropdown--show');
      clearTimeout(dropdownTimer);
    });

    dropdown.addEventListener('mouseleave', () => {
      dropdownTimer = window.setTimeout(() => dropdown.classList.remove('dropdown--show'), 300);
    });
  }

  else {
    dropdown.addEventListener('click', () => {
      dropdown.classList.toggle('dropdown--show');
    });

    window.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('dropdown--show');
      }
    });
  }
});

const headerMobile = document.querySelector('.header .header__mobile');
const mobileMenuButton = headerMobile.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = mobileMenu.querySelector('.mobile-menu__overlay');

mobileMenuButton.addEventListener('click', () => {
  mobileMenuButton.classList.toggle('is-active');
  mobileMenu.classList.toggle('mobile-menu--open');
});

mobileOverlay.addEventListener('click', () => {
  mobileMenuButton.classList.remove('is-active');
  mobileMenu.classList.remove('mobile-menu--open');
});