import React from 'react';
import { connect } from 'react-redux';
import EditReview from '../components/EditReview';

const mapStateToProps = state => ({currentUser: state.auth.currentUser});

export default connect(mapStateToProps)(EditReview);
