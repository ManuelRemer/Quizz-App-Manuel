//import { data } from './db'

/*{
    id: 0,
    question: 'What type of a language is HTML?',
    answer: 'Markup Language',
    isBookmarked: true,
    tags: ['HTML', 'general'],
  } */

export function createCard(card) {
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
  cardQuestion.textContent = card.question
  cardQuestion.classList.add('question-card__text')
  cardSection.append(cardQuestion)

  const cardAnswer = document.createElement('p')
  cardAnswer.textContent = card.answer
  cardAnswer.classList.add('question-card__answer')
  cardAnswer.classList.add('hidden')
  cardSection.append(cardAnswer)

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

  for (let i = 0; i < card.tags.length; i++) {
    let cardLi = document.createElement('li')
    cardLi.textContent = card.tags[i]
    cardUl.append(cardLi)
  }

  return cardSection
}

/* <section class="question-card question-card-not-influenced-by-dm">
          <a><i class="fas fa-bookmark bookmark-card"></i></a>
          <h2 class="question-card__headline">Question1</h2>
          <p class="question-card__text">
            What do you they do if and what if not?
          </p>
          <button>Show answer</button>
          <ul class="flex-tag">
            <li>Tag 1</li>
            <li>Tag 1</li>
            <li>Tag 1</li>
            <li>Tag 1</li>
          </ul>
        </section>
         */
