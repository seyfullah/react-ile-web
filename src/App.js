import logo from './logo.svg';
import './App.css';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';
import { Component } from 'react';
import alertify from 'alertifyjs';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo1 from './FormDemo1';

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: []
  }
  componentDidMount() {
    this.getProducts()
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  }
  getProducts(categoryId) {
    let url = "http://localhost:3000/products"
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }
  addToCart = (product) => {
    this.setState(prevState => {
      let newCart = [...prevState.cart];
      var addedItem = newCart.find(c => c.product.id === product.id);
      if (addedItem) {
        addedItem.quantity += 1;
      }
      else {
        newCart.push({ product: product, quantity: 1 });
      }
      alertify.success(product.productName + " sepete eklendi.");
      return { cart: newCart };
    });
  }
  removeFromCart = (product) => {
    this.setState(prevState => {
      let newCart = prevState.cart.filter(c => c.product.id !== product.id);
      return { cart: newCart };
    });
  }
  render() {
    let categoryInfo = { title: "Kategori Listesi" }
    let productInfo = { title: "Ürün Listesi" }
    return (
      <div className="App">
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Routes>
                <Route exact path="/" element={
                  <ProductList
                    products={this.state.products}
                    currentCategory={this.state.currentCategory}
                    info={productInfo}
                    addToCart={this.addToCart}
                  />
                } />
                <Route path="/cart" element={<CartList />} />
                <Route path="/form1" element={<FormDemo1 />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}