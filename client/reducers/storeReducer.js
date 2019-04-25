import storeData from '../../data/mufflaz'
const initialState = storeData.products

const storeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}

export default storeReducer
