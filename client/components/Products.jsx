import React from 'react'
import { connect } from 'react-redux'

import AddProduct from './AddProduct'
import { getWombats, showError } from '../actions'

class Wombats extends React.Component {
  componentDidMount () {
    this.props.getWombats()
  }

  handleDelete = wombat => {
    return () => {
      this.props.deleteWombat(wombat)
    }
  }

  render () {
    const { wombats, isLoading, displayError } = this.props

    return (
      <React.Fragment>
        <h1>Wombats</h1>
        {isLoading && <div>Loading...</div>}
        <ul>
          {wombats.map(wombat =>
            (
              <li key={wombat.name}>
                {wombat.name} {' '}
                <button onClick={this.handleDelete(wombat.name)}>Delete</button>
              </li>
            )
          )}
        </ul>
        {displayError && <div style={{ color: 'red' }}>Something went wrong</div>}
        <AddWombat />
      </React.Fragment>
    )
  }
}

function mapStateToProps ({ wombats, isLoading, showError }) {
  return {
    wombats,
    isLoading,
    showError
  }
}

const mapDispatchToProps = {
  deleteWombat,
  getWombats,
  showError
}

export default connect(mapStateToProps, mapDispatchToProps)(Wombats)