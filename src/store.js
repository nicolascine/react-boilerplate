import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: state.cart.concat(action.photo) };
      break;
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(photo => photo.id !== action.photo.id) };
      break;
    default:
      break;
  }

  return state;
};

export default createStore(reducer, { cart: [] });
