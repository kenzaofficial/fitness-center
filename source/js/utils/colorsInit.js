function colorsInit() {
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
}

export { colorsInit };
