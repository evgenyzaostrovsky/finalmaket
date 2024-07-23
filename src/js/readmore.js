const readNext = document.querySelector('.read-next')
const hiddenFirst = document.querySelector('.content__hidden--first')
const hiddenSecond = document.querySelector('.content__hidden--second')
const hiddenThird = document.querySelector('.content__hidden--third')
const contentHidden = document.querySelectorAll('.content__hidden')
const readNextIcon = document.querySelector('.read-next__icon')

function textHide() {
  hiddenFirst.classList.toggle('content__hidden--first')
  hiddenSecond.classList.toggle('content__hidden--second')
  hiddenThird.classList.toggle('content__hidden--third')
  readNextIcon.classList.toggle('read-next__icon--rotate')
  console.log('Hello, Burov')
}

readNext.addEventListener('click', textHide)
