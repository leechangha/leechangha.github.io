const sidebarNav = document.querySelector('.navigation');
const toggleBtn = document.querySelector('.toggle');

function toggleClick() {
    if(toggleBtn.classList.contains('active')){ 
        sidebarNav.classList.remove('active');
        toggleBtn.classList.remove('active');
    }else{
        sidebarNav.classList.add('active');
        toggleBtn.classList.add('active');
    }
    
}