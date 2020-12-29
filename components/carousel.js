import UI from './ui.js'
const ui = new UI()

class Carousel {
  constructor() {
    this.rem = 16
  }
  carousel(section, products, type, medida = 350) {
    section.style.display = ''

    let counter = 2;
    let num = products.length - 1
    products.push(products[0])
    products.push(products[1])
    products.unshift(products[num])
    products.unshift(products[num])

    if (type == 'espera') {
      let parent = document.createElement('div')
      parent.className = 'carousel'

      for (let i = 0; i < products.length; i++) {
        let div = document.createElement('div')
        div.className = 'carousel-slide-es mx-3'
        div.innerHTML = `${products[i]}`
        parent.appendChild(div)
      }
      console.log(parent)
      parent.firstElementChild.nextSibling.id = 'lastClone'
      parent.lastElementChild.previousSibling.id = 'firstClone'

      ui.changeRoot('--var-medida', `${medida}px`, section)
      parent.style.transform = `translateX(-${((medida * 3) * 2) - (this.rem * 2)}px)`

      section.appendChild(parent)

      this.slideBtn(section)
      const prevBtn = section.querySelector('#prevBtn')
      const nextBtn = section.querySelector('#nextBtn')

      console.log(counter)

      prevBtn.addEventListener('click', () => {
        counter--
        console.log(counter)
        parent.style.transition = 'transform 1s ease-in-out'
        parent.style.transform = `translateX(-${2068 + (1082 * (counter - 2))}px`
      })

      nextBtn.addEventListener('click', () => {
        counter++
        console.log(counter)
        parent.style.transition = 'transform 1s ease-in-out'
        parent.style.transform = `translateX(-${2068 + (1082 * (counter - 2))}px`
      })

      parent.addEventListener('transitionend', () => {
        if (parent.children[counter].id === 'lastClone') {
          parent.style.transition = 'none'
          counter = parent.children.length - 3
          parent.style.transform = `translateX(-${2068 + (1082 * (counter - 2))}px`
        }
        if (parent.children[counter].id === 'firstClone') {
          parent.style.transition = 'none'
          counter = parent.children.length - counter
          parent.style.transform = `translateX(-${2068 + (1082 * (counter - 2))}px`
        }
      })
    }

    // } else {
    //   let parent = document.createElement('div')
    //   parent.className = 'carousel'
    //   for (let i = 0; i < products.length; i++) {
    //     let div = document.createElement('div')
    //     div.className = 'carousel-slide-ve mx-3'
    //     div.innerHTML = `${products[i]} `
    //     parent.appendChild(div)
    //   }
    //   section.appendChild(parent)
    // }
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
