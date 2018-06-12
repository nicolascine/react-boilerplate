import React, { Component } from 'react';
import store from '../store';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);
    this.state = {
      cart: []
    };
    store.subscribe(() => {
      this.setState({
        cart: store.getState().cart
      });
    });
  }

  render() {
    return (
      <div>
        <hr />
        <h4>Shopping Cart</h4>
        {this.state.cart.map(photo => (
          <li key={photo.id}>
            <span>{photo.name}</span> -
            <button onClick={() => this.removeFromCart(photo)}> Remover </button>
          </li>
        ))}
      </div>
    );
  }

  removeFromCart(photo) {
    store.dispatch({ type: 'REMOVE_FROM_CART', photo });
  }
}

export default ShoppingCart;
