/* в этот файл добавляет скрипты*/

const slider = document.querySelector('.nouislider');

const createSlider = () => {
  noUiSlider.create(slider, {
    start: [0, 900],
    connect: [false, true, false],
    range: {
      min: 0,
      max: 1000,
    },
    step: 1,
    format:{
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
};
createSlider();


const cardButtons = document.querySelectorAll('.card__button');
cardButtons.forEach((cardButton) => {
  cardButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('клик по кнопке');
  });

});


// так так так

// const select = document.querySelector('.sort__select');
// const arrow = document.querySelector('.sort__arrow');

// select.addEventListener('click', () => {
//   arrow.classList.toggle('sort__arrow--active');
// });


// select.addEventListener('change', () => {
//   arrow.classList.remove('sort__arrow--active');
//   console.log('asdasdas');
// });

// select.addEventListener('blur', () => {
//   arrow.classList.remove('sort__arrow--active');
// });
