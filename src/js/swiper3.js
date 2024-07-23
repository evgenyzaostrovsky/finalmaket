let swiperInstance3
const navSwiper3 = document.querySelector('.servicesPrice__list')
const liSwiper3 = document.querySelectorAll('.servicesPrice__item')
const swiperPanigation3 = document.querySelector('.swiper-pagination-3')

function deleteSwiperWrapperClass() {
  navSwiper3.classList.remove('swiper-wrapper')
}
function deleteSwiperSlideClass() {
  for (let i = 0; i < liSwiper3.length; i++) {
    liSwiper3[i].classList.remove('swiper-slide')
  }
}

function deleteSwiperPanigation() {
  swiperPanigation3.classList.remove('swiper-pagination')
  swiperPanigation3.classList.remove('swiper-pagination-3')
  swiperPanigation3.classList.remove('servicesPrice__list__swiper3')
}

function addSwiperPagination() {
  swiperPanigation3.classList.add('swiper-pagination')
  swiperPanigation3.classList.add('swiper-pagination-3')
}

function addSwiperWrapperClass() {
  navSwiper3.classList.add('swiper-wrapper')
}

function addSwiperSlideClass() {
  for (let i = 0; i < liSwiper3.length; i++) {
    liSwiper3[i].classList.add('swiper-slide')
  }
}

function initSwiper3(swiperName, pagName) {
  swiperInstance3 = new Swiper(swiperName, {
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

function destroySwiper3() {
  if (swiperInstance3) {
    swiperInstance3.destroy(true, true)
    swiperInstance3 = undefined
    const paginationEl = document.querySelector('.swiper-pagination-3')
    if (paginationEl) {
      paginationEl.innerHTML = '' // Очистка содержимого пагинации
    }
    deleteSwiperSlideClass()
    deleteSwiperWrapperClass()
    deleteSwiperPanigation()
  }
}

function checkScreenWidthSwiper3() {
  if (window.innerWidth <= 767) {
    if (!swiperInstance3) {
      addSwiperSlideClass()
      addSwiperWrapperClass()
      addSwiperPagination()
      initSwiper3('.swiper-3', '.swiper-pagination-3')
    }
  } else {
    if (swiperInstance3) {
      destroySwiper3()
    }
  }
}

// Initial check
checkScreenWidthSwiper3()
deleteSwiperSlideClass()
deleteSwiperWrapperClass()
deleteSwiperPanigation()

// Check on resize
window.addEventListener('resize', checkScreenWidthSwiper3)
