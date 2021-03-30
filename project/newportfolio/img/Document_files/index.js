'use strict'

const headline = document.querySelector('.headline');
const words = document.querySelectorAll('.fw_600');
let wordsIndex = 0;
setInterval(() => {
  setTimeout(()=>{
    words.forEach(element => {
      if(element.classList.contains('is-visible')){
        element.classList.remove('is-visible');
        element.classList.add('is-hidden');
      }
    })
    const word = words.item(wordsIndex);
    word.classList.remove('is-hidden');
    word.classList.add('is-visible');
    wordsIndex++;
    wordsIndex %= 3;

    const width = word.getBoundingClientRect().width;
    console.log(width);
  
    headline.classList.add('show');
    headline.style.width = `${width}px`;
  }, 0)  
  setTimeout(() => {
    headline.classList.remove('show');
    headline.style.width = `0px`;
  }, 2000);
}, 3000);



const elemCanvas = document.querySelector('.home__bottom');
const context = elemCanvas.getContext('2d');
let canvasWidth = 0;
let canvasHeight = 100;
const init = () => {
  resizeHandler();
  window.addEventListener('resize', ()=>{
    requestAnimationFrame(resizeHandler);
  })
}
const render = () => {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  drawCanvas();
}

const resizeHandler = () => {
  console.log('dkdkdkdkdk');
  elemCanvas.width = canvasWidth = window.innerWidth;
  elemCanvas.height = canvasHeight;
  elemCanvas.style.width = `${canvasWidth}px;`;
  elemCanvas.style.height = `${canvasHeight}px;`;
  render();
}

const drawCanvas = () => {

  context.fillStyle = 'white';
  context.beginPath();
  context.moveTo(0, canvasHeight);
  context.lineTo(canvasWidth * 0.7 ,canvasHeight);
  context.lineTo(canvasWidth * 0.2 , 0);
  context.lineTo(0 , canvasHeight);
  context.fill();
  
  context.beginPath();
  context.moveTo(canvasWidth * 0.7, canvasHeight);
  context.lineTo(canvasWidth , canvasHeight);
  context.lineTo(canvasWidth , 0);
  context.lineTo(canvasWidth * 0.7, canvasHeight);
  context.fill();
  context.closePath();
}

init();
