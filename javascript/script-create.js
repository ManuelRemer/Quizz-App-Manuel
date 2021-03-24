import { pushFieldset } from './lib/db.js'
import { itemsStringToArray } from './lib/db.js'
const form = document.querySelector('form')
form.addEventListener('submit', event => {
  event.preventDefault()
  const inputQuestion = form['add-question']
  const inputAnswer = form['add-answer']

  const inputTags = form['add-tags']
  const arrayTags = itemsStringToArray(inputTags.value)
  console.log(itemsStringToArray(inputTags.value))
  //console.log(inputTags)

  pushFieldset({
    newQuestion: inputQuestion.value,
    newAnswer: inputAnswer.value,
    newTags: arrayTags,
  })

  //console.log(pushFieldset)

  form.reset()
  alert('Section created!')
})
