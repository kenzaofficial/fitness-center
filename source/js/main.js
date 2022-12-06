import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import { colorsInit } from './utils/colorsInit';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tabs');
  const content = document.querySelectorAll('.content');
  const changeClass = function (element) {
    for (let i = 0; i < tabs.children.length; i++) {
      tabs.children[i].classList.remove('tabs__btn--is-active');
    }
    element.classList.add('tabs__btn--is-active');
  };
  tabs.addEventListener('click', function (event) {
    const currentTab = event.target.dataset.btn;
    changeClass(event.target);
    for (let i = 0; i < content.length; i++) {
      content[i].classList.remove('tabs__btn--is-active');
      if (content[i].dataset.content === currentTab) {
        content[i].classList.add('tabs__btn--is-active');
      }
    }
  });

  // мое дз

  const tabsSecondary = document.querySelector('#tabsSecondary');
  const contentSecondary = document.querySelectorAll('#contentSecondary');
  const changeClassSecondary = function (element) {
    for (let i = 0; i < tabsSecondary.children.length; i++) {
      tabsSecondary.children[i].classList.remove('tabs__btn--is-active');
    }
    element.classList.add('tabs__btn--is-active');
  };
  console.log(tabsSecondary);

  tabsSecondary.addEventListener('click', function (event) {
    const currentTab = event.target.dataset.btnInner;
    changeClassSecondary(event.target);
    for (let i = 0; i < contentSecondary.length; i++) {
      contentSecondary[i].classList.remove('tabs__btn--is-active');
      if (contentSecondary[i].dataset.contentInner === currentTab) {
        contentSecondary[i].classList.add('tabs__btn--is-active');
      }
    }
  });
  // colorsInit();
  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
