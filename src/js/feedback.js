const feedbackButton = document.querySelector('.right-side__item--feedback')
const feedbackSide = document.querySelector('.wrapper_feedback')
const feedbackCloseButton = document.querySelector('.feedback__close-button')
const wrapper = document.querySelector('.wrapper')
const mainContent = document.querySelector('.wrapper__main-content')
const leftSideMenu = document.querySelector('.left-side-menu')

function showFeedbackSide() {
  feedbackSide.classList.add('wrapper_feedback--show')
  feedbackSide.classList.remove('wrapper_feedback--hide-animation')
  wrapper.classList.add('wrapper--stop-overflow')
  mainContent.classList.add('wrapper__main-content--opacity')
  leftSideMenu.classList.add('wrapper__main-content--opacity')
  mainContent.addEventListener('click', handleOutsideClick)
  leftSideMenu.addEventListener('click', handleOutsideClick)
}

function hideFeedbackSide() {
  feedbackSide.classList.add('wrapper_feedback--hide-animation')
  mainContent.classList.remove('wrapper__main-content--opacity')
  leftSideMenu.classList.remove('wrapper__main-content--opacity')
  mainContent.removeEventListener('click', handleOutsideClick)
  setTimeout(function () {
    feedbackSide.classList.remove('wrapper_feedback--show')
    wrapper.classList.remove('wrapper--stop-overflow')
  }, 1000)
}

feedbackButton.addEventListener('click', showFeedbackSide)
feedbackCloseButton.addEventListener('click', hideFeedbackSide)

function handleOutsideClick(event) {
  if (
    !feedbackSide.contains(event.target) &&
    !feedbackButton.contains(event.target)
  ) {
    hideFeedbackSide()
  }
}

feedbackButton.addEventListener('click', (event) => {
  event.stopPropagation()
  showFeedbackSide()
})

function handleKeydown(event) {
  if (feedbackSide.classList.contains('wrapper_feedback--show')) {
    hideFeedbackSide()
  }
}

// Убедитесь, что обработчик добавляется только один раз
document.addEventListener('keydown', handleKeydown)
