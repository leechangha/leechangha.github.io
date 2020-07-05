'use strict'

const homePosition = document.querySelector('#home').getBoundingClientRect().y;
const aboutPosition = document.querySelector('#about').getBoundingClientRect().y;
const skillPosition = document.querySelector('#skills').getBoundingClientRect().y;
const workPosition = document.querySelector('#work').getBoundingClientRect().y;
const testimonialPosition = document.querySelector('#testimonials').getBoundingClientRect().y;
const contactPosition = document.querySelector('#contact').getBoundingClientRect().y;

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    let section = '';
    const windowScrollY = window.scrollY

    if(windowScrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenus = document.querySelectorAll('.navbar__menu_item');
navbarMenu.addEventListener('click', (event)=>{
    
    const target = event.target;
    const link = target.dataset.link;
    
    if(link == null)
        return;
    navbarMenu.classList.remove('open')
    scrollIntoView(link)
});


//show menu when toggle btn cliked
const toggleBtn = document.querySelector('.navbar__toggle-btn');
toggleBtn.addEventListener('click', (e) =>{
    navbarMenu.classList.toggle('open');
})

//Handle click on "contact me" button on home
const contactMeBtn = document.querySelector('.home__contactme');
contactMeBtn.addEventListener('click', ()=>{
    scrollIntoView('#contact');
});


//Scrolling opacity 0 to 1 home section
//Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('#home');
const homeContainer = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});


//ArrowUpButton gone when it is on the top
const arrowUpButton = document.querySelector('#arrowup');
document.addEventListener('scroll', () =>{
    if(window.scrollY > homeHeight){
        arrowUpButton.classList.add('visible');
    }else{
        arrowUpButton.classList.remove('visible');
    }
})
arrowUpButton.addEventListener('click', ()=>{
    scrollIntoView('#home', false);
})


//Myproject selected effect
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null)
        return;

    //Remove selection from the previous item and select
    const selectedCategory = document.querySelector('.category__btn.selected');
    selectedCategory.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(()=>{
        projects.forEach((project)=>{
            
            if(filter === "*" || filter === project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        })
        projectContainer.classList.remove('anim-out')
    }, 300);
})



/* Utill Function */
function scrollIntoView(selector, isSmooth = true) {
    const scrollTo = document.querySelector(selector);
    if(isSmooth)
        scrollTo.scrollIntoView({behavior : 'smooth', inline : 'nearest'});
    else
        scrollTo.scrollIntoView();
};