const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}
// panels.forEach((panel) => {
//   panel.addEventListener('click', toggleOpen, false);
// });
panels.forEach(panel => panel.addEventListener('click', toggleOpen, false));

function toggleActive(e) {
  // console.log(e);
  // 3つの<p>タグのtransitionイベントがターゲット
  // console.log(e.propertyName);
  // => flex-grow, font-size, transform
  console.log(e.propertyName.includes('flex'));
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  };
};
// panels.forEach((panel) => {
//   panel.addEventListener('transitionend',toggleActive, false);
// });
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive, false));
