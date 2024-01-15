import React from 'react';
import Adminpage from './Adminpage';
import Dashboard from './Dashboard'; // Update the path to your Dashboard component
import ProductManagement from './ProductManagement'; // Update the path to your ProductManagement component


const Combine = () => {
  return (
    <div>
      <Dashboard />
      <ProductManagement />
      <Adminpage/>
    </div>
  );
};

export default Combine;
