import { connect } from 'react-redux';
import Actions from '../../model/Actions';
import ResourcePanel from '../react/ResourcePanel';

function mapStateToProps(state) {
    return { resourceSupply: state.resourceSupply }
}

function mapDispatchToProps(dispatch) {
    return {
        onStackClick: (resourceType) => dispatch(Actions.ChooseResourceFromStack(resourceType))
    }
}

const ResourcePanelComponent = connect(mapStateToProps, mapDispatchToProps)(ResourcePanel);

export default ResourcePanelComponent;
