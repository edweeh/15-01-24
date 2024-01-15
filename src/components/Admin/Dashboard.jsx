import React, { useState, useEffect } from 'react';
import './dashboard.css';
const Dashboard = () => {
  const [totalSales, setTotalSales] = useState(0);
  const [orderStatus, setOrderStatus] = useState({});
  const [popularProducts, setPopularProducts] = useState([]);

  // Simulated API call or data fetch
  const fetchData = () => {
    // Simulated data (replace with actual API calls)
    const simulatedData = {
      totalSales: 15000,
      orderStatus: {
        pending: 5,
        shipped: 15,
        delivered: 20,
      },
      popularProducts: [
        { id: 1, name: 'Dog Food', sales: 30 },
        { id: 2, name: 'Cat Toys', sales: 25 },
        { id: 3, name: 'Bird Cage', sales: 20 },
      ],
    };

    setTotalSales(simulatedData.totalSales);
    setOrderStatus(simulatedData.orderStatus);
    setPopularProducts(simulatedData.popularProducts);
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  return (
    <div className='dashboard-container'>
      <h2>Dashboard</h2>
      <div className='total-sales'>
        <h3>Total Sales: ${totalSales}</h3>
      </div>
      <div className='order-status'>
        <h3>Order Status</h3>
        <ul>
          <li>Pending: {orderStatus.pending}</li>
          <li>Shipped: {orderStatus.shipped}</li>
          <li>Delivered: {orderStatus.delivered}</li>
        </ul>
      </div>
      <div className='popular-products'>
        <h3>Popular Products</h3>
        <ul>
          {popularProducts.map((product) => (
            <li key={product.id}>
              {product.name} - Sales: {product.sales}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
