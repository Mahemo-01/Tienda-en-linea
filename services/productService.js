class ProductService {
  constructor() {
    this.products = this.getProducts()
  }

  getProducts() {
    this.products = [
      { id: 1, name: 'bermuda jogging zimithfalov', price: 2000, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/82a73042-aaa9-4aaf-b3e6-188d0a6f012c-234f04fb0da46536dd16029597594634-320-0.jpg', subCat: 'jogging', category: 'bermudas', collection: "verano", type: "hombre" },
      { id: 2, name: 'bermuda jogging zimithfalov', price: 2000, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/82a73042-aaa9-4aaf-b3e6-188d0a6f012c-234f04fb0da46536dd16029597594634-320-0.jpg', subCat: 'jogging', category: 'bermudas', collection: "otoño", type: "hombre" },
      { id: 3, name: 'bermuda jogging zimithfalov', price: 2000, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/82a73042-aaa9-4aaf-b3e6-188d0a6f012c-234f04fb0da46536dd16029597594634-320-0.jpg', subCat: 'jogging', category: 'bermudas', collection: "invierno", type: "hombre" },
      { id: 4, name: 'bermuda jogging zimithfalov', price: 2000, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/82a73042-aaa9-4aaf-b3e6-188d0a6f012c-234f04fb0da46536dd16029597594634-320-0.jpg', subCat: 'jogging', category: 'bermudas', collection: "primavera", type: "hombre" },
      { id: 5, name: 'bermuda jogging zimithfalov', price: 2000, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/82a73042-aaa9-4aaf-b3e6-188d0a6f012c-234f04fb0da46536dd16029597594634-320-0.jpg', subCat: 'jogging', category: 'bermudas', collection: "verano", type: "mujer" },
      { id: 6, name: 'bermuda jogging zimithfalov', price: 2000, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/82a73042-aaa9-4aaf-b3e6-188d0a6f012c-234f04fb0da46536dd16029597594634-320-0.jpg', subCat: 'jogging', category: 'bermudas', collection: "otoño", type: "mujer" }
    ]
    return this.products
  }
  getActiveProducts() {
    const prductsActive = this.products.filter(p => {
      return p.status === 1
    })
    return prductsActive
  }
  getCollections(products) {
    const types = [...new Set(products.map(p => p.collection.toUpperCase()))]
    return types.sort()
  }
  getTypes(products) {
    const types = [...new Set(products.map(p => p.type.toUpperCase()))]
    return types.sort()
  }
}

export default ProductService