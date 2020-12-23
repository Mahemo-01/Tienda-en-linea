class ProductService {
  constructor() {
    this.products = this.getProducts()
  }

  getProducts() {
    this.products = [
      { id: 1, name: 'bermuda jogging zimithfalov', price: 2000, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/82a73042-aaa9-4aaf-b3e6-188d0a6f012c-234f04fb0da46536dd16029597594634-320-0.jpg', subCat: 'jogging', category: 'bermudas', type: "hombre" },
    ]
    return this.products
  }
}

export default ProductService