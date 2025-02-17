const heroContainer = document.querySelector('.hero');
const sliderArrows = heroContainer.querySelectorAll('.hero__slider-arrow');
const sliderPaginationButtons = heroContainer.querySelectorAll('.hero__slider-pagination-button');
const slides = Array.from(heroContainer.querySelectorAll('.hero-card'));

const BACKGROUNDS = ['#f3ebe1', '#eae6fc', '#e5e6e8'];

const [nextSlide, prevSlide] = sliderArrows;

const slideCount = slides.length ;
let slideIndex = 0;

const updateSlider = () => {
  slides.forEach((slide, index) => {
    slide.style.display = (index === slideIndex) ? 'grid' : 'none';
  });

  if (window.innerWidth <= 320 || window.innerWidth >= 1440) {
    heroContainer.style.backgroundColor = BACKGROUNDS[slideIndex];
  }
  if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    heroContainer.style.backgroundColor = 'transparent';
    heroContainer.style.backgroundImage = `linear-gradient(to bottom, ${BACKGROUNDS[slideIndex]} 0% 77.29%, #ffffff 77.29% 100%)`;
  }

  sliderPaginationButtons.forEach((button, index) => {
    button.classList.toggle('hero__slider-pagination-button--current', index === slideIndex);
  });

};

const paginationSliderChoose = (evt) => {
  const buttonIndex = Array.from(sliderPaginationButtons).indexOf(evt.target);
  slideIndex = buttonIndex;

  sliderPaginationButtons.forEach((button) => {
    button.classList.remove('hero__slider-pagination-button--current');
  });

  updateSlider();
};

const showPreviousSlide = () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
};

const showNextSlide = () => {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
};


sliderPaginationButtons.forEach((button) => {
  button.addEventListener('click', paginationSliderChoose);
});

prevSlide.addEventListener('click', showPreviousSlide);
nextSlide.addEventListener('click', showNextSlide);

updateSlider();
