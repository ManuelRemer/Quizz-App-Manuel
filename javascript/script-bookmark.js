const bookmarks = document.querySelectorAll('.bookmark-card')
const buttons = document.querySelectorAll('button')
const cards = document.querySelectorAll('.question-card')

bookmarks.forEach(item => {
  item.addEventListener('click', () => {
    if (item.style.color === 'red') {
      item.style.color = 'black'
    } else {
      item.style.color = 'red'
    }
  })
})
