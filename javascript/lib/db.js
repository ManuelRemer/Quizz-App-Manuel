export function pushQuestionCard(QuestionCardObjekt) {
  let QuestionCards
  const storageQuestioncards = JSON.parse(localStorage.getItem('fieldsets'))
  if (storageQuestioncards === null) {
    QuestionCards = []
  } else {
    QuestionCards = storageQuestionCard
  }
  QuestionCards.push(QuestionCardObjekt)
  localStorage.setItem('fieldsets', JSON.stringify(QuestionCards))
}

export function getFieldset() {
  let QuestionCards
  const storageQuestioncards = JSON.parse(localStorage.getItem('fieldsets'))
  if (storageQuestioncards === null) {
    QuestionCards = []
  } else {
    QuestionCards = storageQuestioncards
  }
  return QuestionCards
}
