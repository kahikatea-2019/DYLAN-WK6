import React from 'react'
import { connect } from 'react-redux'

import AddProduct from './AddProduct'
import { getProducts, showError } from '../actions'

class Products extends React.Component {
  componentDidMount () {
    this.props.getProducts()
  }

  handleDelete = product => {
    return () => {
      this.props.deleteProduct(product)
    }
  }

  render () {
    const { products, isLoading, displayError } = this.props

    return (
      <React.Fragment>
        <h1>Products</h1>
        {isLoading && <div>Loading...</div>}
        <ul>
          {products.map(product =>
            (
              <li key={product.name}>
                {product.name} {' '}
                <button onClick={this.handleDelete(product.name)}>Delete</button>
              </li>
            )
          )}
        </ul>
        {displayError && <div style={{ color: 'red' }}>Something went wrong</div>}
        <AddProduct />
      </React.Fragment>
    )
  }
}

function mapStateToProps ({ products, isLoading, showError }) {
  return {
    products,
    isLoading,
    showError
  }
}

const mapDispatchToProps = {
  deleteProduct,
  getproducts,
  showError
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)