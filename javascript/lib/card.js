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

  for (let i = 0; i < card.newTags.length; i++) {
    let cardLi = document.createElement('li')
    cardLi.textContent = card.newTags[i]
    cardUl.append(cardLi)
  }
  // --> here is your extra challenge: remove comment// beside the forEach method and find out why it does not return similar as the loop above

  //card.newTags.forEach(tag => {
  //  tag = document.createElement('li')
  //  tag.textContent = card.newTags
  //  cardUl.append(tag)
  //})

  return cardSection
}
