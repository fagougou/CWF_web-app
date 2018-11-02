import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_DONE,
  PRESS_TAB,
  TOGGLE_MENU,
  OPEN_MODAL,
  CLOSE_MODAL,
  tabs
} from './actions';

const initState = {
  products: [],
  isFetching: false,
  activeTab: tabs.BEST_SELLER,
  menuOpen: false,
  modalOpen: false,
  modalID: ''
}

export default (state = initState, action) => {

  switch(action.type) {
    case GET_PRODUCTS_START:
      return {
        ...state,
        isFetching: true
      }

    case GET_PRODUCTS_DONE:
      return {
        ...state,
        isFetching: false,
        products: action.products
      }

    case PRESS_TAB:
      return {
        ...state,
        activeTab: action.tab
      }

    case TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen
      }
    
    case OPEN_MODAL:
      return {
        ...state,
        modalOpen: true,
        modalID: action.id
      }

    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false,
        modalID: ''
      }
    
    default:
      return state;
  }

}