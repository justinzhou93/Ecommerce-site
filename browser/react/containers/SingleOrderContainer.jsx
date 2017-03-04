import {connect} from 'react-redux';
import SingleOrder from '../components/SingleOrder';


const mapStateToProps = (orders) => ({orders})

export default connect(mapStateToProps)(SingleOrder)
