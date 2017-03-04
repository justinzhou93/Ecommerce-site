import {connect} from 'react-redux';
import Orders from '../components/AllOrders';

const mapStateToProps = (orders) => ({orders})

export default connect(mapStateToProps)(Orders)
