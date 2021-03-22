const bookmarks = document.querySelectorAll('.bookmark-card')
const buttons = document.querySelectorAll('button')
const cards = document.querySelectorAll('.question-card')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const main = document.querySelector('main')
const head = document.querySelector('head')

bookmarks.forEach(item => {
  item.addEventListener('click', () => {
    if (item.style.color === 'red') {
      item.style.color = 'black'
    } else {
      item.style.color = 'red'
    }
  })
})

cards.forEach(card => {
  const button = card.querySelector('button')
  button.addEventListener('click', () => {
    const answer = document.createElement('div')

    if (button.textContent === 'Show answer') {
      button.textContent = 'Hide answer'
      //event.preventDefault()

      answer.style.height = 'minContent'
      answer.style.width = 'minContent'
      answer.style.padding = '10px'
      answer.style.marginBottom = '10px'
      answer.style.backgroundColor = 'lightBlue'
      answer.textContent = 'This is an answer'
      answer.style.alignSelf = 'center'
      card.append(answer)
    } else {
      const answer = card.querySelector('div')
      button.textContent = 'Show answer'
      answer.remove()
    }
  })
})

// create Darkmode-ButtonDarkmode
function addDarkmodeButton() {
  const dark = document.createElement('button')
  dark.classList.add('dark')
  dark.style.borderStyle = 'none'
  dark.style.height = 'minContent'
  dark.style.width = 'minContent'
  dark.style.padding = '10px'
  dark.style.marginBottom = '10px'
  dark.style.backgroundColor = 'darkgrey'
  dark.style.borderRadius = '50%'
  dark.textContent = 'dm'
  header.append(dark)
  header.style.position = 'relative'
  dark.style.position = 'absolute'
  dark.style.right = '30px'
  dark.style.top = '10px'
}
addDarkmodeButton()

// Adds darkmode-class to every card
//

let style = document.createElement('style')
style.innerHTML =
  '.card-darkmode {' +
  'background-color: black;' +
  'color: green;}' +
  ' ' +
  '.button-main-darkmode {' +
  'background-color: #232529;}'
console.log(style)
let ref = document.querySelector('script')
ref.parentNode.insertBefore(style, ref)

//Adds eventlistener to darkmote-button
const dark = document.querySelector('.dark')
dark.addEventListener('click', () => {
  cards.forEach(card => {
    card.classList.toggle('card-darkmode')
    card.classList.toggle('question-card')
    header.classList.toggle('card-darkmode')
    footer.classList.toggle('card-darkmode')
    main.classList.toggle('button-main-darkmode')
  })
})
