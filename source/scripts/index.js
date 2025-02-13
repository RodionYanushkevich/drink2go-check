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
