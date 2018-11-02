import { connect } from 'react-redux';
import { fetchProducts, pressTab, openModal } from '../actions';
import Tab from '../components/Tab';
import React, { Component } from 'react';

class AllProducts extends Component {
  
  componentDidMount() {
    this.props.fetchProducts();
  }

  componentDidUpdate(prevProps) {
    // 如果所提供的Product list根据‘爆款’， ‘最新‘， ’主编推荐‘做了标签的话，这里当用户切换tab后，应该重新fetch对应的products。
    // fetchProducts()也可以take tab name as argument to fetch corresponding data。
    // Backend的api需要作相应调整。

    // 现在的情况是当用户每次切换tab，都重新fetch那同样的99个products。
    if (prevProps.activeTab !== this.props.activeTab) {
      this.props.fetchProducts();
    }
  }

  render() {
    const { products, activeTab, pressTab, isFetching, openModal, modalID } = this.props;
    return (
      <Tab 
        products={products}
        activeTab={activeTab}
        pressTab={pressTab}
        isFetching={isFetching}
        openModal={openModal}
        modalID={modalID}
      />
    )
  }
}

const mapStateToProps = state => ({ 
  products: state.products,
  activeTab: state.activeTab,
  isFetching: state.isFetching,
  modalID: state.modalID
});

export default connect(mapStateToProps, { fetchProducts, pressTab, openModal })(AllProducts);
