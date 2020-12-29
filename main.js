import ProductService from './services/productService.js'
// import VerticalNav from './components/verticalbar.js'
// import Breadcrumb from './components/breadcrumb.js'
import Carousel from './components/carousel.js'
import UI from './components/ui.js'

const ps = new ProductService()
// const vb = new VerticalNav()
// const breadcrumb = new Breadcrumb()
const cs = new Carousel()
const ui = new UI()

const mainSection = document.getElementById('main-section')
const homeSection = document.getElementById('home-section')
const typeSection = document.getElementById('type-section')
const searchSection = document.getElementById('search-section')
const shopSection = document.getElementById('shop-section')
const cardSection = document.getElementById('card-section')
const cartSection = document.getElementById('cart-section')
const formSection = document.getElementById('form-section')

let products = ps.getActiveProducts()
const collections = ps.getCollections(products)
const types = ps.getTypes(products)

// listen Items //
window.addEventListener("load", bodyLoaded)
mainSection.addEventListener('click', typeClicked)
// Breadcrumb //
// breadcrumb.add('inicio')

let obj1 = [1, 2, 3, 4, 5]
let obj2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function bodyLoaded() {
  ui.search()
  cs.carousel(homeSection, obj1, 'espera', 350)
  cs.carousel(homeSection, obj2, 've', 200)
  ui.typeCards(typeSection, types)
}

function typeClicked(e) {
  const valueTxt = e.target.id
  const typeSplit = valueTxt.split('-')
  const type = typeSplit[0].toUpperCase()

  types.forEach((e) => {
    if (type == e) {
      console.log('success')
    }
  })
}