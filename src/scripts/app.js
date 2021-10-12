function Buttons() {
  const buttons = document.querySelectorAll('[data-button]');
  const continueBtn = document.querySelector('[data-continue]');

  function resetButtons() {
    buttons.forEach((btn) => btn.classList.remove('active'));
  }

  function onBtnClick(e) {
    continueBtn.removeAttribute('disabled');
    resetButtons();
    e.target.classList.add('active');
    continueBtn.href = e.target.dataset.link;
  }

  buttons.forEach((button) => {
    button.addEventListener('click', onBtnClick);
  });
}

Buttons();
