import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Shop from './shop';
import { BrowserRouter, Route } from 'react-router-dom';

// import ProductList from './productList';
// import ProductDetails from './product-details';
// import CartSummary from './cartSummary';
// import CheckoutForm from './checkoutForm';

const App = props => {
  const [setView] = useState({ name: 'shop', params: {} });
  // const [cart, setCart] = useState([]);

  const toggleView = (name, params) => {
    setView({ name: name, params: params });
  };

  return (
    <>
      <Header toggleView={toggleView}/>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
      </BrowserRouter>
      <Footer />
    </>
  );
};

// getCartItems() {
//   fetch('/api/carts')
//     .then(response => response.json())
//     .then(cartItems => {
//       this.setState({
//         cart: cartItems
//       });
//     });
// }

// addToCart(product) {
//   fetch('/api/carts', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       productId: product.productId
//     })
//   })
//     .then(response => response.json())
//     .then(addedProduct => {
//       const newCart = this.state.cart.concat(addedProduct);
//       this.setState({
//         cart: newCart
//       });
//     });
// }

// calculateCartTotal() {
//   let totalPrice = 0;
//   this.state.cart.forEach(product => {
//     totalPrice = totalPrice + product.price;
//   });
//   return (totalPrice / 100).toFixed(2);
// }

// placeOrder(buyerInfo) {
//   fetch('/api/orders', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       name: buyerInfo.name,
//       creditCard: buyerInfo.creditCard,
//       shippingAddress: buyerInfo.shippingAddress
//     })
//   })
//     .then(response => response.json())
//     .then(data => {
//       this.setState({
//         view: {
//           name: 'catalog',
//           params: {}
//         },
//         cart: []
//       });
//     });
// }

// componentDidMount() {
//   this.getCartItems();
// }

export default App;
