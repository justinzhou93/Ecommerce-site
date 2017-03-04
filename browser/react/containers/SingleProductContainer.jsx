import React from 'react';
import { connect } from 'react-redux';

import SingleProduct from '../components/SingleProduct';

const mapStateToProps = state => ({currentProduct: state.products.currentProduct})

export default connect(mapStateToProps)(SingleProduct);
