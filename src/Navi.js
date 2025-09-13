import { Component } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

export default class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <Navbar>
          <NavbarBrand href="/">Benim Uygulamam</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
            <Nav className="me-auto" navbar>
              <NavItem>
                <Link to="/form1">Form 1 Demo</Link>
              </NavItem>
              <NavItem>
                <Link to="/form2">Form 2 Demo</Link>
              </NavItem>
              <CartSummary cart={this.props.cart} removeFromCart={this.props.removeFromCart}/>
            </Nav>
        </Navbar>
      </div>
    );
  }
}