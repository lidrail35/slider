console.log('hello');
const pathToImage = './assets/img/';
const arrImage = ['pict-1.jpg', 
                  'pict-2.jpg', 
                  'pict-3.jpg', 
                  'pict-4.jpg', 
                  'pict-5.jpg'];

let nowImage = 0;
const totalImage = arrImage.length - 1;

const leftArrow = document.querySelector('.array-left');
const rightArrow = document.querySelector('.array-right');
const imageContainer = document.querySelector('.visible-image');

leftArrow.addEventListener('click', ()=> {
  (nowImage === 0) ? nowImage = totalImage : nowImage--;
  setImage(nowImage);
});

rightArrow.addEventListener('click', ()=> {
  (nowImage === totalImage) ? nowImage = 0 : nowImage++
  setImage(nowImage);
});

const setImage = nowImage => {
  imageContainer.src = pathToImage + arrImage[nowImage];
  console.log(nowImage);
}