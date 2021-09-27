function Buttons() {
  const buttons = document.querySelectorAll('[data-button]');
  const continueBtn = document.querySelector('[data-continue]');

  function onBtnClick() {
    continueBtn.removeAttribute('disabled');
  }

  buttons.forEach((button) => {
    button.addEventListener('click', onBtnClick);
  });
}

Buttons();
