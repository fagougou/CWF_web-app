// Actions

// Data actions:
export const GET_PRODUCTS_START = 'GET_PRODUCTS_START';
export const GET_PRODUCTS_DONE = 'GET_PRODUCTS_DONE';
export function fetchProducts() {
  return dispatch => {
    dispatch({ type: GET_PRODUCTS_START });
    return fetch('http://localhost:3000/api/all')
      .then(res => res.json())
      .then(json => dispatch({
        type: GET_PRODUCTS_DONE,
        products: json.products
      }))
      // .catch(err => console.log(err))
  }
}

// User triggered actions:
export const PRESS_TAB = 'PRESS_TAB';
export const pressTab = tab => ({ type: PRESS_TAB, tab });

export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = () => ({ type: TOGGLE_MENU });

export const OPEN_MODAL = 'OPEN_MODAL';
export const openModal = id => {
  console.log('openModal clicked', id)
  return ({ type: OPEN_MODAL, id })
};

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeModal = () => {
  console.log('closeModal clicked')
  return ({ type: CLOSE_MODAL })
};

// other constants
export const tabs = {
  BEST_SELLER: 'BEST_SELLER',
  LATEST: 'LATEST',
  RECOMMENDED: 'RECOMMENDED' 
}
