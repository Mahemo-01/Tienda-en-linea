class Carousel {
  carousel(section, productos, type) {
    section.style.display = ''

    if (type == 'espera') {
      let parent = document.createElement('div')
      parent.className = 'carousel'
      for (let i = 0; i < 3; i++) {
        let div = document.createElement('div')
        div.className = 'carousel-slide-es mx-3'
        parent.appendChild(div)
      }
      section.appendChild(parent)
    } else {
      let parent = document.createElement('div')
      parent.className = 'carousel'
      for (let i = 0; i < 7; i++) {
        let div = document.createElement('div')
        div.className = 'carousel-slide-ve mx-3'
        parent.appendChild(div)
      }
      section.appendChild(parent)
    }
  }

  typeCards(section, types) {
    section.style.display = ''
    for (let i = 0; i < types.length; i++) {
      const type = types[i]
      let div = document.createElement('div')
      div.className = 'type-card'
      div.id = `${type.toLowerCase()}-container`
      div.innerHTML = `${type}`
      section.appendChild(div)
    };
  }
}

export default Carousel
