import { createCard } from './lib/card.js'
import { data } from './lib/db.js'
const header = document.querySelector('header')
//const footer = document.querySelector('footer')
const content = document.querySelector('.cards-cont')
//const head = document.querySelector('head')

for (let i = 0; i < data.length; i++) {
  const cardSection = createCard(data[i])
  content.append(cardSection)
}

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

//let style = document.createElement('style')
//style.innerHTML =
//  '.card-darkmode {' +
//  'background-color: black;' +
//  'color: green;}' +
//  ' ' +
//  '.button-main-darkmode {' +
//  'background-color: #232529;}'
//
//let ref = document.querySelector('script')
//ref.parentNode.insertBefore(style, ref)
//
////Adds eventlistener to darkmote-button
//const dark = document.querySelector('.dark')
//dark.addEventListener('click', () => {
//  cards.forEach(card => {
//    card.classList.toggle('card-darkmode')
//    card.classList.toggle('question-card')
//    header.classList.toggle('card-darkmode')
//    footer.classList.toggle('card-darkmode')
//    main.classList.toggle('button-main-darkmode')
//  })
//})
