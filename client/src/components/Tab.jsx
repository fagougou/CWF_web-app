import React from 'react';
import Product from './Product';
import Modal from './Modal';
import { tabs } from '../actions';

export default function Tab({
  products,
  pressTab,
  activeTab,
  isFetching,
  openModal, 
  modalID }) {

  const onTabPress = ({ target }) => {
    if (target.tagName === 'SPAN') pressTab(target.id);
  }

  const getProduct = id => {
    return products.filter(p => p._id === id)[0];
  }

  const setActive = (id) => (activeTab === id) ? 'active' : '';

  return (
    <main>
      <div className='tab-buttons' onClick={e => onTabPress(e)}>
        <span
          id={tabs.BEST_SELLER}
          className={setActive(tabs.BEST_SELLER)}>
        爆款</span>
        <span 
          id={tabs.LATEST}
          className={setActive(tabs.LATEST)}>
        最新</span>
        <span 
          id={tabs.RECOMMENDED}
          className={setActive(tabs.RECOMMENDED)}>
        主编推荐</span>
      </div>

      {modalID !== ''
      && 
      <Modal product={getProduct(modalID)} />
      }

      {isFetching
      ?
      <div className='tab-content loading'>Loading...</div>
      : 
      <div className='tab-content'>
        {products.map(product => 
          <Product
            id={product._id}
            key={product._id}
            img={product.picture}
            price={product.price}
            name={product.name}
            description={product.description}
            onClick={openModal}
            modalID={modalID}
          />
        )}
      </div>
      }

    </main>
  )
}
