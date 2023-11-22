const cards = document.querySelectorAll('.card')
cards.forEach((card) => {
  card.addEventListener('mouseenter', ()=> {
    card.children[0].play()
  })
  card.addEventListener('mouseout', ()=> {
    card.children[0].pause()
  })
})