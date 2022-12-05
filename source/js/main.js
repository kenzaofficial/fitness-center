import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const colors = [
    {
      colorName: '$color-night-rider',
      colorHex: '#333333',
    },
    {
      colorName: '$color-golden-glow',
      colorHex: '#f5d57f',
    },
    {
      colorName: '$color-sapphire',
      colorHex: '#102654',
    },
    {
      colorName: '$color-deep-blush',
      colorHex: '#F57391',
    },
    {
      colorName: '$color-torch-red',
      colorHex: '#ED0233',
    },
  ];

  if ('content' in document.createElement('template')) {
    const colorsIdElement = document.querySelector('.colors');
    const templateColor = document.querySelector('#color');

    for (let i = 0; i < colors.length; i++) {
      // выведет 0, затем 1, затем 2

      const templateColorClone = templateColor.content.cloneNode(true);
      const colorItemText =
        templateColorClone.querySelectorAll('.colors__item p');
      const colorItem = templateColorClone.querySelector('.colors__item');
      colorItem.style.backgroundColor = colors[i].colorHex;
      colorItemText[0].textContent = colors[i].colorName;
      colorItemText[1].textContent = colors[i].colorHex;
      colorsIdElement.appendChild(templateColorClone);
    }
  }

  const copyToClipBoard = async (text) => navigator.clipboard.writeText(text);
  const colorElements = document.querySelectorAll('.colors__item');
  [...colorElements].forEach(async (item) => {
    item.addEventListener('click', async () => {
      await copyToClipBoard(item.querySelector('p').textContent);
    });
  });

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
