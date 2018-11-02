import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import AllProducts from './containers/AllProducts';
import HeaderWrap from './containers/HeaderWrap';
import { toggleMenu, closeModal } from './actions';

const App = ({ menuOpen, toggleMenu, modalOpen, closeModal }) => {
  return (
    <div className='app' onClick={() => {
      modalOpen && closeModal();
      menuOpen && toggleMenu();
      console.log('app clicked');
    }}>
      <HeaderWrap />
      <AllProducts />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    menuOpen: state.menuOpen,
    modalOpen: state.modalOpen
  }
}


export default connect(mapStateToProps, { toggleMenu, closeModal })(App);
