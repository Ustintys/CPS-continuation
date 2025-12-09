let btnArrow = document.querySelector('.brand__button-arrow');
let logo = document.querySelectorAll('.brand__item--hidden');
let logo1120 = document.querySelectorAll('.brand__item--1120');
let mq = window.matchMedia("(min-width: 1120px)");


function resize() {
  for (let i = 0; i < logo1120.length; i++) {
    if(mq.matches){
      logo1120[i].classList.add('brand__item--active1120');
    } else {
      logo1120[i].classList.remove('brand__item--active1120');
    }
  }
}

resize();               // при загрузке
mq.addEventListener("change", resize); // при изменении ширины


btnArrow.addEventListener('click', () => {
  if (btnArrow.textContent === 'Показать все') {
    for (let i = 0; i < logo.length; i++) {
      logo[i].classList.add('brand__item--active');
      console.log('ghbdtn');
    }
    btnArrow.textContent = 'Скрыть';
  } else {
    for (let i = 0; i < logo.length; i++) {
      logo[i].classList.remove('brand__item--active');
    }
    btnArrow.textContent = 'Показать все';
  }
});
