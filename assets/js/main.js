// ==================== MENU ====================
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// SHOW MENU
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// HIDDEN MENU
// Validate if constant exists
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// ==================== REMOVE MENU MOBILE ====================
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');

  navMenu.classList.remove('show-menu');
}

navLinks.forEach(element => {
  element.addEventListener('click', linkAction);
});


// ==================== CHANGE BACKGROUND HEADER ====================
function scrollHeader () {
  const header = document.getElementById('header');

  // when the scroll is grather than 100 viewport height, add the scroll header class to the header tag
  if (this.scrollY >= 100) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

// ======================= SWIPER DISCOVER =============================
var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
});

// ======================= VIDEO =============================
const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('video-icon');

const playPause = () => {
  if (videoFile.paused) {
    // Play video
    videoFile.play();

    // We change the icon
    videoIcon.classList.add('ri-pause-line');
    videoIcon.classList.remove('ri-play-line');

  } else {
    // Pause video
    videoFile.pause();

    // We change the icon
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
  }
};

videoButton.addEventListener('click', playPause);

const finalVideo = () => {
  // Video ends, icon change
  videoIcon.classList.remove('ri-pause-line');
  videoIcon.classList.add('ri-play-line');
}

// ended, when the video ends
videoFile.addEventListener('ended', finalVideo);

// =================== CURRENT DATE ===================
const date = document.getElementById('current-year');
const currentYear = new Date().getFullYear();
date.textContent = currentYear;


// ================ SHOW SCROLL UP ===============
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 200) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
  const scrollY = window.scrollY;

  sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
      } else{
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
      }
  });
}
window.addEventListener('scroll', scrollActive);


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});


// ================ SCROLL REVEAL ANIMATION =================
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true
});


sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
});

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
});

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
});