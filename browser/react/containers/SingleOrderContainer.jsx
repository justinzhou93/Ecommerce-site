import {connect} from 'react-redux';
import SingleOrder from '../components/SingleOrder';

const mapStateToProps = (state, ownProps) => ({
    order: ownProps.order,
    lineitems: ownProps.order.lineitems
});

export default connect(mapStateToProps)(SingleOrder)
