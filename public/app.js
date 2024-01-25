AOS.init();

// mobile menu
document.querySelectorAll('.toggleMenu').forEach(menuBtn =>{
  if(menuBtn){
    menuBtn.addEventListener('click', () =>{
      document.querySelector('.menu').classList.toggle('-translate-x-full');
      document.body.classList.toggle('overflow-hidden')
    })
  }
})

// sticky navbar
const header = document.querySelector('header')

  window.addEventListener('scroll', navFix )

    function navFix (){
    if (window.scrollY > header.offsetHeight ){
        header.classList.remove('bg-transparent');
        header.classList.add('bg-brand-black')
    } else{
        header.classList.add('bg-transparent');
        header.classList.remove('bg-brand-black')
    }
  }



