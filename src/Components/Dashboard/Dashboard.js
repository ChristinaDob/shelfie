import React from 'react';
import Product from './Product';
import './Dashboard.css';

const Dashboard = props => {
  const { inventory } = props;
  console.log(`props`, props);
  console.log(`inventory`, inventory);
  let mappedInventory = inventory.map(product => {
    return (
      <Product
        product={product}
        deleteProductFunc={this.state.props.deleteProductFunc}
        selectProductFunc={this.props.selectProductFunc}
      />
    );
  });
  return <div className="dashboard">{mappedInventory}</div>;
};

export default Dashboard;
