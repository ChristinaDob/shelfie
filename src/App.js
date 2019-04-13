import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: null
    };
  }

  componentDidMount() {
    this.fetchInventory();
  }

  fetchInventory = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      });
    });
  };

  addProduct = (name, price, image_url) => {
    const myProduct = {
      name,
      price,
      image_url
    };
    axios.post('/api/products', myProduct).then(res => {
      this.fetchInventory();
    });
  };

  deleteProduct = id => {
    axios.delete(`/api/products/${id}`).then(() => {
      this.fetchInventory();
    });
  };

  selectProduct = id => {
    this.setState({
      selectedId: id
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Dashboard
            inventory={this.state.inventory}
            deleteProductFunc={this.deleteProduct}
            selectProductFunc={this.selectProduct}
          />
          <Form
            addProductFunc={this.addProduct}
            selected={this.state.selectedId}
            selectProductFunc={this.selectProduct}
            reset={this.fetchInventory}
          />
        </div>
      </div>
    );
  }
}

export default App;
