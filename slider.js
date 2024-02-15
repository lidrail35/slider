
console.log('hello');

const imageContainer = document.querySelector('.image-container')
const leftArrow = document.querySelector('.array-left');
const rightArrow = document.querySelector('.array-right');

leftArrow.addEventListener('click', ()=> {
  const lastChild = imageContainer.removeChild(imageContainer.children[imageContainer.children.length - 1]);
   imageContainer.children[1].classList.toggle('center', false);
   imageContainer.children[1].classList.toggle('rightBlock', true);
   imageContainer.children[0].classList.toggle('leftBlock', false);
   imageContainer.children[0].classList.toggle('center', true);

   imageContainer.insertBefore(lastChild, imageContainer.children[0]);
   imageContainer.children[0].classList.toggle('rightBlock', false);
   imageContainer.children[0].classList.toggle('leftBlock', true);
});

 rightArrow.addEventListener('click', ()=> {
   
 });
