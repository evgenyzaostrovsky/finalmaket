const burgerButton = document.querySelector('.left-side__item')
const leftSide = document.querySelector('.wrapper__left-side-menu')
const closeButton = document.querySelector('.side-menu-close')
const mainContent = document.querySelector('.wrapper__main-content')
const wrapper = document.querySelector('.wrapper')

function showSideMenu() {
  leftSide.classList.add('left-side-menu--show')
  mainContent.classList.add('wrapper__main-content--opacity')
  wrapper.classList.add('wrapper--stop-overflow')
  mainContent.addEventListener('click', handleOutsideClick)
}

function hideSideMenu() {
  leftSide.classList.remove('left-side-menu--show')
  mainContent.classList.remove('wrapper__main-content--opacity')
  wrapper.classList.remove('wrapper--stop-overflow')
  mainContent.removeEventListener('click', handleOutsideClick)
}

function handleOutsideClick(event) {
  if (
    !leftSide.contains(event.target) &&
    !burgerButton.contains(event.target)
  ) {
    hideSideMenu()
  }
}

burgerButton.addEventListener('click', (event) => {
  event.stopPropagation()
  showSideMenu()
})

closeButton.addEventListener('click', hideSideMenu)
