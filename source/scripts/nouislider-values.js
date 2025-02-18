const priceFieldset = document.querySelector('.price-fieldset');

const inputs = priceFieldset.querySelectorAll('.price-fieldset__input');

const slider = priceFieldset.querySelector('.nouislider');
const [minPriceInput, maxPriceInput] = inputs;

const createSlider = () => {
  noUiSlider.create(slider, {
    start: [0, 900],
    connect: [false, true, false],
    range: {
      min: -20,
      max: 1020,
    },
    step: 1,
    padding: [20, 20],
    format:{
      to: function (value) {
        return Math.round(value);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
};
createSlider();

slider.noUiSlider.on('update', (values) => {
  minPriceInput .value = values[0];
  maxPriceInput.value = values[1];
});

minPriceInput.value = '';
