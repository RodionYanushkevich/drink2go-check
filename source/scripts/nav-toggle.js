const navigationList = document.querySelector('.navigation__list');
const buttonToggle = document.querySelector('.navigation__button');


buttonToggle.onclick = function() {
  navigationList.classList.toggle('navigation__list--open');
  if (buttonToggle.classList.contains('navigation__button--cross')) {
    buttonToggle.classList.remove('navigation__button--cross');
  }else{
    buttonToggle.classList.add('navigation__button--cross');
  }
};
