import gsap from 'gsap'

let lastScrollTop = 0;
const body = document.body;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
  let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

  if (st > lastScrollTop){
    console.log('down')
  } else {
    console.log('up')
  }

  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

});


const infoBtn = document.querySelector('.slider .info-btn')
const contentBtn = document.querySelector('.slider .content-btn')
const indicator = document.querySelector('.slider .indicator')

const content = document.querySelector('.slider .content')


infoBtn.addEventListener('click', evt => {
  contentBtn.classList.remove('active')
  evt.target.classList.add('active')
  gsap.to(indicator, {
    x: 0,
    duration: .3
  })

  gsap.to(content, {
    x: 0,
    duration: .3
  })
})

contentBtn.addEventListener('click', evt => {
  infoBtn.classList.remove('active')
  evt.target.classList.add('active')
  gsap.to(indicator, {
    x: '100%',
    duration: .3
  })

  gsap.to(content, {
    x: '-100%',
    duration: .3
  })
})

