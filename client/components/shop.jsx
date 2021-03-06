import React, { useState, useEffect } from 'react';
import Products from './products';

const Shop = props => {
  const [products, setProducts] = useState([]);
  const [swatches, setSwatches] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(false);

  const callAPI = async () => {
    const productRes = await fetch('/api/products');
    const products = await productRes.json();

    const swatchesRes = await fetch('/api/swatches');
    const swatches = await swatchesRes.json();

    setProducts(products);
    setSwatches(swatches);
    setFetchStatus(true);
  };

  useEffect(() => {
    if (!fetchStatus) {
      callAPI();
    }
  }, [fetchStatus]);

  return (
    <>
      <div className="container">
        <ul className='list-unstyled d-flex flex-wrap'>
          {(fetchStatus) ? <Products products={products} swatches={swatches}/> : <div>Loading...</div>}
        </ul>
      </div>
    </>
  );
};

export default Shop;
