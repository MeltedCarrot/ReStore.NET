import { useState, useEffect } from 'react';
import { Product } from '../../app/models/product';
import ProductList from './ProductList';

function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch('https://localhost:7139/api/products');
      let data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default Catalog;
