import Config from './Config';

const DefaultState = createDefaultState();

function createDefaultState() {
    return {
        locked: false,
        stacks: Config.resourceTypes.map((resourceType) => ({
            resourceType: resourceType,
            size: Config.maxStackHeight,
            selectLimit: Config.maxStackHeight,
            selectedCount: 0
        }))
    };
}

export default DefaultState;
