
console.log('hello');

let startX = 0;
let startY = 0;

const sliderBox = document.querySelector('.slider-box');
const imageContainer = document.querySelector('.image-container')
const leftArrow = document.querySelector('.array-left');
const rightArrow = document.querySelector('.array-right');

leftArrow.addEventListener('click', ()=> {
  const lastChild = imageContainer.removeChild(imageContainer.children[imageContainer.children.length - 1]);
  lastChild.classList.toggle('rightBlock', false);
  lastChild.classList.toggle('leftBlock', true);

  imageContainer.children[1].classList.toggle('center', false);
  imageContainer.children[1].classList.toggle('rightBlock', true);
  imageContainer.children[0].classList.toggle('leftBlock', false);
  imageContainer.children[0].classList.toggle('center', true);

  imageContainer.insertBefore(lastChild, imageContainer.children[0]);
});

rightArrow.addEventListener('click', ()=> {
  const firstChild = imageContainer.removeChild(imageContainer.children[0]);
  firstChild.classList.toggle('leftBlock', false);
  firstChild.classList.toggle('rightBlock', true);
  
  imageContainer.children[0].classList.toggle('center', false);
  imageContainer.children[0].classList.toggle('leftBlock', true);
  imageContainer.children[1].classList.toggle('rightBlock', false);
  imageContainer.children[1].classList.toggle('center', true);

  imageContainer.appendChild(firstChild);
});

sliderBox.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX;
  startY = event//.touches[0].clientY;
  console.log('click', startX, startY);
});

sliderBox.addEventListener('touchmove', (event) => {
  let stopX = event.touches[0].clientX;
  let stopY = event.touches[0].clientY;
  const deltaX = startX-stopX;
  const deltaY = startY-stopY;
  
  if (deltaX > 100) {
    leftArrow.click();
    stopX = null;
  } 

  if (deltaX < -100) {rightArrow.click()}
  //console.log('move', startX-stopX, startY-stopY);
});