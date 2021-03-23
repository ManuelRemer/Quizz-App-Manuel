const form = document.querySelector('.form')
form.addEventListener('submit', event => {
  event.preventDefault()
  const inputQuestion = form['add-question']

  const inputAnswer = form['add-answer']
  const inputTags = form['add-tags']

  const newContent = {
    newAnswer: inputQuestion.value,
    newQuestion: inputAnswer.value,
    newTags: inputTags.value,
  }

  console.log(newContent)

  form.reset()
})
