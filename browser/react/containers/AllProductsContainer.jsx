import React from 'react';
import { connect } from 'react-redux';

import AllProducts from '../components/AllProducts';

const mapStateToProps = (state) => {
    return {
        productList: state.products.productList
    }
};

export default connect(mapStateToProps)(AllProducts);
