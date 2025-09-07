import logo from './logo.svg';
import './App.css';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';
import { Component } from 'react';

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
      return { cart: newCart };
    });
  }
  render() {
    let categoryInfo = { title: "Kategori Listesi" }
    let productInfo = { title: "Ürün Listesi" }
    return (
      <div className="App">
        <Container>
          <Navi cart={this.state.cart} />
          <Row>
            <Col xs="3"><CategoryList
              currentCategory={this.state.currentCategory}
              changeCategory={this.changeCategory}
              info={categoryInfo} /></Col>
            <Col xs="9"><ProductList
              products={this.state.products}
              currentCategory={this.state.currentCategory}
              info={productInfo}
              addToCart={this.addToCart} /></Col>
          </Row>
        </Container>
        <h2>Hoş geldin.</h2>
      </div>
    )
  }
}