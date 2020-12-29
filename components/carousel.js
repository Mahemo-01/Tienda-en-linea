import UI from './ui.js'
const ui = new UI()

class Carousel {
  constructor() {
    this.rem = 16
  }
  carousel(section, products, type, medida = 350) {
    section.style.display = ''

    let num = products.length - 1
    products.push(products[0])
    products.push(products[1])
    products.unshift(products[num])
    products.unshift(products[num])

    let counter = 2;

    let carousel = document.createElement('div')
    carousel.className = 'carousel'
    let slides = document.createElement('div')
    slides.className = 'carousel-slides'

    ui.changeRoot('--var-medida', `${medida}px`, carousel)

    if (type == 'espera') {
      for (let i = 0; i < products.length; i++) {
        let div = document.createElement('div')
        div.className = 'carousel-slide-es mx-3'
        div.innerHTML = `${products[i]}`
        slides.appendChild(div)
      }

      slides.style.transform = `translateX(-${((medida * 3) * 2) - (this.rem * 2)}px)`
      carousel.appendChild(slides)

      this.slideBtn(carousel)
      const prevBtn = carousel.querySelector('#prevBtn')
      const nextBtn = carousel.querySelector('#nextBtn')

      prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        counter--
        slides.style.transition = 'transform 1s ease-in-out'
        slides.style.transform = `translateX(-${2068 + (1082 * (counter - 2))}px`
      })

      nextBtn.addEventListener('click', () => {
        if (counter >= slides.children.length - 1) return;
        counter++
        slides.style.transition = 'transform 1s ease-in-out'
        slides.style.transform = `translateX(-${2068 + (1082 * (counter - 2))}px`
      })

      slides.addEventListener('transitionend', () => {
        if (slides.children[counter].id === 'lastClone') {
          slides.style.transition = 'none'
          counter = slides.children.length - 3
          slides.style.transform = `translateX(-${2068 + (1082 * (counter - 2))}px`
        }
        if (slides.children[counter].id === 'firstClone') {
          slides.style.transition = 'none'
          counter = slides.children.length - counter
          slides.style.transform = `translateX(-${2068 + (1082 * (counter - 2))}px`
        }
      })

      section.appendChild(carousel)
    }

    else {
      for (let i = 0; i < products.length; i++) {
        let div = document.createElement('div')
        div.className = 'carousel-slide-ve mx-3'
        div.innerHTML = `${products[i]} `
        slides.appendChild(div)
      }
      slides.style.transform = `translateX(-${(medida * 2) - (this.rem * 2)}px)`
      carousel.appendChild(slides)

      section.appendChild(carousel)
    }

    slides.firstElementChild.nextSibling.id = 'lastClone'
    slides.lastElementChild.previousSibling.id = 'firstClone'
  }





  slideBtn(section) {
    let btns = ['prev', 'next']
    let parent = document.createElement('div')
    parent.className = 'carousel-btns'

    for (let i = 0; i < 2; i++) {
      let div = document.createElement('div')
      div.id = `${btns[i]}Btn`
      div.className = 'btn-carousel'
      div.innerHTML = `${btns[i]}`
      parent.appendChild(div)
    }
    section.appendChild(parent)
  }
}

export default Carousel
