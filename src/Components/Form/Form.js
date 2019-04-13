import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: 0,
      image_url: ''
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selected && this.props.selected !== prevProps.selected) {
      axios.get(`/api/inventory/${this.props.selected}`).then(res => {
        const { name, price, image_url } = res.data;
        this.setState({
          name,
          price,
          image_url
        });
      });
    }
  }

  addProduct = () => {
    const { name, price, image_url } = this.state;
    this.props.addProductFunc(name, price, image_url);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({
      name: '',
      price: 0,
      image_url: ''
    });
  };

  editProduct = () => {
    const { name, price, image_url } = this.state;
    axios
      .put(`/api/products?id=${this.props.selected}`, {
        name,
        price,
        image_url
      })
      .then(res => {
        this.clearInputs();
        this.props.selectedProductFunc();
        this.props.reset();
      });
  };

  render() {
    let { name, price, image_url } = this.state;
    return (
      <div className="form">
        {image_url ? (
          <img src={image_url} alt="image" />
        ) : (
          <div className="no-image" />
        )}
        <label>
          Name:
          <input
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>
        <label>
          Price:
          <input
            value={price}
            onChange={e => this.setState({ price: e.target.value })}
          />
        </label>
        <label>
          Image URL:
          <input
            value={image_url}
            onChange={e => this.setState({ image_url: e.target.value })}
          />
        </label>
        <button onClick={this.clearInputs}>Cancel</button>
        <button onClick={this.editProduct}>Save Changes</button>
        <button onClick={this.addProduct}>Add</button>
      </div>
    );
  }
}

export default Form;
