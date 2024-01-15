import React, { useState } from 'react';
import './product.css'
const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleAddProduct = () => {
    setProducts((prevProducts) => [...prevProducts, { ...newProduct, id: Date.now() }]);
    setNewProduct({ name: '', category: '', price: 0 });
  };

  const handleEditProduct = (productId, updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === productId ? updatedProduct : product))
    );
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  return (
    <div className="product-management-container">
      <h2>Product Management</h2>
      <div>
        <h3>Add New Product</h3>
        <form className="add-product-form">
          <label>
            Name:
            <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
          </label>
          <br/>
          <br />
          <label>
            Category:
            <input type="text" name="category" value={newProduct.category} onChange={handleInputChange} />
          </label>
          <br/>
          <br />
          <label>
            Price:
            <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} />
          </label>
          <br />
          <br/>
          <button type="button" onClick={handleAddProduct}>
            Add Product
          </button>
        </form>
      </div>
      <div className="existing-products-list">
        <h3>Existing Products</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="product-item">
              {product.name} - {product.category} - ${product.price}
              <button onClick={() => handleEditProduct(product.id, { ...product, name: 'Updated Name' })}>Edit</button>
              <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductManagement;
