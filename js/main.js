import gsap from 'gsap'




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

