import { connect } from 'react-redux';
import Actions from '../../model/Actions';
import ResourcePanel from '../react/ResourcePanel';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
        onStackClick: (resourceType) => dispatch(Actions.ChooseResourceFromStack(resourceType))
    }
);

const ResourcePanelComponent = connect(mapStateToProps, mapDispatchToProps)(ResourcePanel);

export default ResourcePanelComponent;
