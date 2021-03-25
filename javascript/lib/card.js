export function createCard(card) {
  console.log(card)
  const cardSection = document.createElement('section')
  cardSection.classList.add(
    'question-card',
    'question-card-not-influenced-by-dm'
  )

  const bookmark = document.createElement('i')
  bookmark.classList.add('fas', 'fa-bookmark', 'bookmark-card')
  cardSection.append(bookmark)

  if (card.isBookmarked === true) {
    bookmark.style.color = 'black'
  } else {
    bookmark.style.color = 'red'
  }

  const cardQuestion = document.createElement('p')
  cardQuestion.textContent = card.newQuestion
  cardQuestion.classList.add('question-card__text')
  cardSection.append(cardQuestion)

  const cardAnswer = document.createElement('p')
  cardAnswer.textContent = card.newAnswer
  cardAnswer.classList.add('question-card__answer')
  cardAnswer.classList.add('hidden')

  const cardButton = document.createElement('button')
  cardSection.append(cardButton)
  cardButton.textContent = 'Show Answer'
  cardButton.addEventListener('click', () => {
    cardAnswer.classList.toggle('hidden')
    if (cardButton.textContent === 'Show answer') {
      cardButton.textContent = 'Hide answer'
    } else {
      cardButton.textContent = 'Show answer'
    }
  })
  cardSection.append(cardAnswer)
  const cardUl = document.createElement('ul')
  cardUl.classList.add('question-card__tags')
  cardSection.append(cardUl)

  card.newTags.forEach(tag => {
    const tagElement = document.createElement('li')
    tagElement.textContent = tag
    cardUl.append(tagElement)
  })

  return cardSection
}
