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


const testimonials = [
  {
    id: 1,
    name:'Dennis One',
    profileImg : '',
    comments: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. There are many variations of passages of Lorem Ipsum available',
    position: 'Interface Designer'
  },
  {
    id: 2,
    name:'Dennis Two',
    profileImg : '',
    comments: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. There are many variations of passages of Lorem Ipsum available',
    position: 'Interface Designer'
  },
  {
    id: 3,
    name:'Dennis Three',
    profileImg : '',
    comments: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. There are many variations of passages of Lorem Ipsum available',
    position: 'Interface Designer'
  }
]
//testimonials
const getTestimonials = () =>{
 const testimonialsData = testimonials;
 testimonialsData.forEach((item) => {
   setTestimonialCard(item);
 }) 
}
const setTestimonialCard = (item) => {
  const parent = document.querySelector('.testimonial__wrapper');
  const wapper = document.createElement('div');
  const profileImg = document.createElement('img');
  const comments = document.createElement('p');
  const name = document.createElement('h4');
  const position = document.createElement('div');

  wapper.setAttribute("id", item.id);
  wapper.classList.add('testimonial__card');

  profileImg.classList.add('testimonial__profile');
  profileImg.src='./img/user-1.jpg';

  comments.classList.add('testimonial__comments');
  comments.innerText= item.comments;

  name.innerText=item.name;
  position.innerText = item.position;

  wapper.appendChild(profileImg);
  wapper.appendChild(comments);
  wapper.appendChild(name);
  wapper.appendChild(position);

  parent.appendChild(wapper);
}

// getTestimonials();

const testimonialCards = document.querySelector('.testimonial__cards');
let isGrabed = false;
let currenttTestimnoialCadrsX = 0;
let prevMouseX = 0;
let diffX = 0;

const getPage = (position) => {
  let page = parseInt(position/1110);
  page = page >=6 ? 5 : page;
  page = page < 0 ? 1 : page;
  return page;
}

const downHanler = (e) =>{
  isGrabed = true;
  prevMouseX = e.clientX;
  diffX = e.clientX;
  
}
const moveHandler = (e) => {
  if(isGrabed){  
    currenttTestimnoialCadrsX+=(prevMouseX - e.clientX)
    testimonialCards.setAttribute('style', `transform: translate3d(${-currenttTestimnoialCadrsX}px, 0, 0)`);
    prevMouseX = e.clientX;
  }
}
const upHandler = (e) => {
  if(isGrabed){
    diffX -= e.clientX;
    const nextPagePosition = ( getPage(currenttTestimnoialCadrsX) + (diffX > 0 ? 1 : 0 ) ) * 1110;
    testimonialCards.setAttribute('style', `transform: translate3d(-${nextPagePosition}px, 0, 0)`);
    currenttTestimnoialCadrsX=nextPagePosition;
    isGrabed = false;
  }
}

const nextPage = () => {
  const next = (getPage(currenttTestimnoialCadrsX) +1) * 1110;
  testimonialCards.setAttribute('style', `transform: translate3d(-${next}px, 0, 0)`);
  currenttTestimnoialCadrsX=next;
}

testimonialCards.addEventListener('mousedown', downHanler);
testimonialCards.addEventListener('mousemove', moveHandler);
testimonialCards.addEventListener('mouseup', upHandler);
testimonialCards.addEventListener('mouseleave', upHandler);

 
