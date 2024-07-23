const callbackButton = document.querySelector('.right-side__item--callback')
const callbackSide = document.querySelector('.wrapper_callback')
const callbackCloseButton = document.querySelector('.callback__close-button')
const wrapper = document.querySelector('.wrapper')
const mainContent = document.querySelector('.wrapper__main-content')
const leftSideMenu = document.querySelector('.left-side-menu')

function showCallbackSide() {
  callbackSide.classList.add('wrapper_callback--show')
  callbackSide.classList.remove('wrapper_callback--hide-animation')
  wrapper.classList.add('wrapper--stop-overflow')
  mainContent.classList.add('wrapper__main-content--opacity')
  leftSideMenu.classList.add('wrapper__main-content--opacity')
  mainContent.addEventListener('click', handleOutsideClick)
  leftSideMenu.addEventListener('click', handleOutsideClick)
}

function hideCallbackSide() {
  callbackSide.classList.add('wrapper_callback--hide-animation')
  mainContent.classList.remove('wrapper__main-content--opacity')
  leftSideMenu.classList.remove('wrapper__main-content--opacity')
  mainContent.removeEventListener('click', handleOutsideClick)
  leftSideMenu.removeEventListener('click', handleOutsideClick)
  setTimeout(function () {
    callbackSide.classList.remove('wrapper_callback--show')
    wrapper.classList.remove('wrapper--stop-overflow')
  }, 1000) // Совпадает с длительностью transition в CSS
}

// Обработчик события 'keydown'
function handleKeydown(event) {
  if (event.key === 'Escape') {
    if (callbackSide.classList.contains('wrapper_callback--show')) {
      hideCallbackSide()
      console.log('Modal hidden on Escape')
    } else if (feedbackSide.classList.contains('wrapper_feedback--show')) {
      hideFeedbackSide()
    }
  }
}

// Убедитесь, что обработчик добавляется только один раз
document.addEventListener('keydown', handleKeydown)

callbackButton.addEventListener('click', (event) => {
  event.stopPropagation()
  showCallbackSide()
})

callbackCloseButton.addEventListener('click', hideCallbackSide)

function handleOutsideClick(event) {
  if (
    !callbackSide.contains(event.target) &&
    !callbackButton.contains(event.target)
  ) {
    hideCallbackSide()
  }
}
