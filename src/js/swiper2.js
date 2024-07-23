let swiperInstance
const showButton = document.querySelector('.showButton--showServices')
const hideButton = document.querySelector('.showButton--hideServices')

function initSwiper(swiperName, pagName) {
  swiperInstance = new Swiper(swiperName, {
    direction: 'horizontal',
    slidesOffsetBefore: 16,
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    pagination: {
      el: pagName,
      clickable: ' true'
    }
  })
}

function destroySwiper() {
  if (swiperInstance) {
    swiperInstance.destroy(true, true)
    swiperInstance = undefined
  }
}
function addHidden768() {
  const servicesSlides = document.querySelectorAll('.repairServices-list__item')

  for (let i = 3; i < servicesSlides.length; i++) {
    servicesSlides[i].classList.add('repairServices-list__item--hidden')
  }
}

function addHidden1120() {
  const servicesSlides = document.querySelectorAll('.repairServices-list__item')
  for (let i = 4; i < servicesSlides.length; i++) {
    servicesSlides[i].classList.add('repairServices-list__item--hidden')
  }
}

function removeHidden() {
  const servicesSlides = document.querySelectorAll('.repairServices-list__item')
  for (let i = 1; i < servicesSlides.length; i++) {
    servicesSlides[i].classList.remove('repairServices-list__item--hidden')
  }
}

function showAllClick() {
  removeHidden()
  showButton.classList.add('showButton--hidden')
  hideButton.classList.remove('showButton--hidden')
}

function hideAllClick() {
  checkScreenWidthHidden()
  showButton.classList.remove('showButton--hidden')
  hideButton.classList.add('showButton--hidden')
}

function checkScreenWidthSwiper() {
  if (window.innerWidth <= 767) {
    showButton.classList.add('showButton--hidden')

    if (!swiperInstance) {
      initSwiper('.swiper-2', '.swiper-pagination-2')
    }
  } else {
    showButton.classList.remove('showButton--hidden')
    if (swiperInstance) {
      destroySwiper()
    }
  }
}

function checkScreenWidthHidden() {
  if (window.innerWidth > 768 && window.innerWidth < 1120) {
    addHidden768()
  } else {
    removeHidden()
    addHidden1120()
  }
}

// Initial check
checkScreenWidthSwiper()
checkScreenWidthHidden()

// Check on resize
window.addEventListener('resize', checkScreenWidthSwiper)
window.addEventListener('resize', checkScreenWidthHidden)
showButton.addEventListener('click', showAllClick)
hideButton.addEventListener('click', hideAllClick)
