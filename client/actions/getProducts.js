import request from 'superagent'

export function deleteProduct (product) {
  return {
    type: 'DELETE_PRODUCT'

  }
}

export function addProduct (product) {
  return {
    type: 'ADD_PRODUCT',
    product: product
  }
}

export function requestApi () {
  return {
    type: 'REQUESTING_API'
  }
}

export function receiveApi () {
  return {
    type: 'RECEIVING_API'
  }
}

export function saveProduct (product) {
  return function (dispatch) {
    dispatch(requestApi())
    request.post('http://localhost:3000/api/products')
      .send({
        name: product
      })
      .then(() => {
        dispatch(addProduct(product))
        dispatch(receiveApi())
      })
      .catch(err => {
        dispatch(receiveApi())
        dispatch(showError(err.message))
      })
  }
}

function requestProducts () {
  return {
    type: 'REQUESTING_PRODUCTS'
  }
}

function receiveProducts (products) {
  return {
    type: 'RECEIVING_PRODUCTS',
    products: products
  }
}

export function getProducts () {
  return function (dispatch) {
    // turn on wait indicator
    dispatch(requestProducts())
    request.get('http://localhost:3000/api/products')
      .then(res => {
        const products = res.body.products
        // turn off wait indicator
        dispatch(receiveProducts(products))
      })
  }
}

export function showError () {
  return {
    type: 'SHOW_ERROR'
  }
}
