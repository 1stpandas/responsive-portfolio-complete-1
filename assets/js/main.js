/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkaction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkaction))


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

 function scrollActive(){
     const scrollY = windpw.pageYoffset

     sections.forEach(current =>{
         const sectionHeight = current.offsetHeight
         const sectionTop = current.offsetTop - 50
         sectionId = current.getAttribute('id')

         if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
             document.querySelector(' .nav__menu a[href*='+']').classList.add('active')
         }else{
            document.querySelector(' .nav__menu a[href*='+']').classList.remove('active')
         }
     })
 }