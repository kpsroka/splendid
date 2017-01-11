import Config from './Config';

const DefaultState = createDefaultState();

function createDefaultState() {
    return {
        resourceSupply: {
            locked: false,
            stacks: Config.resourceTypes.map((resourceType) => ({
                resourceType: resourceType,
                size: Config.maxStackHeight,
                allowSelection: true,
                selectedCount: 0
            }))
        },
        mineBoard: {
            locked: false,
            rows:
                new Array(Config.mineBoardRows).fill(null).map((_, index) => {
                    return new Array(Config.mineBoardRowSize).fill(null).map(
                        (_) => (createRandomMine((index + 1) * 4)))
                })
        },
        hand: {
            mines: [],
            resources: Config.resourceTypes.map((resourceType) => ({
                resourceType: resourceType,
                size: 0
            }))
        }
    };
}

function createRandomMine(maxResourceCost) {
    return {
        resourceType: getRandomResource(),
        cost: createCostMap(maxResourceCost)
    }
}

function getRandomResource() {
    return Config.resourceTypes[Math.floor(Math.random() * Config.resourceTypes.length)];
}

function createCostMap(maxResourceCost) {
    let cost = Math.floor(Math.random() * maxResourceCost) + 1;
    let resourceMap = new Map();
    for (let i = 0; i < cost; i++) {
        let resourceType = getRandomResource();
        resourceMap.set(resourceType, 1 + (resourceMap.get(resourceType) || 0));
    }
    return resourceMap;
}

export default DefaultState;
