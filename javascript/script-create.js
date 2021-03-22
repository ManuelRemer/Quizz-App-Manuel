const form = document.querySelector('.form')
form.addEventListener('submit', event => {
  event.preventDefault()
  const inputQuestion = form['add-question']
  // Get the input element inside the form containing name and id "favourite-color"
  const inputAnswer = form['add-answer']
  const inputTags = form['add-tags']

  // Get the value of the input
  const newAnswer = inputQuestion.value
  const newQuestion = inputAnswer.value
  const newTags = inputTags.value

  console.log(newQuestion)
  console.log(newAnswer)
  console.log(newTags)
  // Resets the form
  form.reset()
})
