import { formatoMexico, trunc } from '../modules/helpers.js'

class UI {
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

  search() {
    let searchId = document.getElementById('nav-form')
    searchId.innerHTML = `
      <input id="filter" class="form-control" type="text" placeholder="Search Products">
    `
    let filterInput = document.getElementById('filter');
    filterInput.addEventListener('keyup', this.filterProducts);
  }

  // Filtra los productos //
  filterProducts() {
    let filterValue = document.getElementById('filter').value.toUpperCase().trim();

    let cardsContainer = document.getElementById('cards-container');
    if (cardsContainer === null) {
      console.log('implementa seccion hombre / mujer')
    } else {
      let cards = cardsContainer.querySelectorAll('.card');
      for (let i = 0; i < cards.length; i++) {
        let cardValue = cards[i].children[1].children[0].innerHTML;
        if (cardValue.toUpperCase().indexOf(filterValue) > -1) {
          cards[i].style.display = '';
        } else {
          cards[i].style.display = 'none';
        }
      }
    }
  }

  displayNone(section) {
    const parentSection = section.parentNode
    let children = parentSection.children
    for (let i = 0; i < children.length; i++) {
      if (children[i].id != section.id) {
        children[i].style.display = 'none'
        children[i].innerHTML = ''
      } section.style.display = ''
    }
  }

  changeRoot(customVar, value) {
    let root = document.querySelector(':root')
    root.style.setProperty(customVar, value)
  }

  addStyle(section, clase) {
    section.classList.add(clase)
  }
}

export default UI
