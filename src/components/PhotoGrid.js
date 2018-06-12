import React, { Component } from 'react';
import store from '../store';

class PhotoGrid extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      photos: [
        {
          id: 1,
          name: 'PhotoName 1',
          price: 111,
          image: 'http://via.placeholder.com/350x150'
        },
        {
          id: 2,
          name: 'PhotoName 2',
          price: 222,
          image: 'http://via.placeholder.com/350x150'
        },
        {
          id: 3,
          name: 'PhotoName 3',
          price: 333,
          image: 'http://via.placeholder.com/350x150'
        },
        {
          id: 4,
          name: 'PhotoName 4',
          price: 444,
          image: 'http://via.placeholder.com/350x150'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h4>Photo List</h4>
        {this.state.photos.map(photo => (
          <div key={photo.id}>
            {photo.name}
            <button onClick={() => this.addToCart(photo)}> ${photo.price}</button>
          </div>
        ))}
      </div>
    );
  }

  addToCart(photo) {
    console.log('photo', photo);
    store.dispatch({ type: 'ADD_TO_CART', photo });
  }
}

export default PhotoGrid;
