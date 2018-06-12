import React, { Component } from 'react';

import PhotoGrid from './PhotoGrid';
import ShoppingCart from './ShoppingCart';

class Main extends Component {
  render() {
    return (
      <div>
        <PhotoGrid />
        <ShoppingCart />
      </div>
    );
  }
}

export default Main;
