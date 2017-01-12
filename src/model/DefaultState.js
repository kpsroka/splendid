import Config from './Config';

const DefaultStatePromise = createDefaultStatePromise();

function * maxCostGenerator () {
    for (let rowIndex = 0; rowIndex < Config.mineBoardRows; rowIndex++) {
        for (let item = 0; item < Config.mineBoardRowSize; item++) {
            yield (rowIndex + 1) * 4;
        }
    }
}

function getInitialCards() {
    let xhr = new XMLHttpRequest();

    return new Promise((resolve) => {
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200 /* OK */) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    resolve([]);
                }
            }
        };


        xhr.open("GET", "/splendid/card?resourceTypes=" + Config.resourceTypes.join(",")
                + "&maxCardCost=" + [...maxCostGenerator()].join(","));
        xhr.send();
    });
}

function getResourceCostMap(costObj) {
    let costMap = new Map();
    Config.resourceTypes.forEach((resourceType) => {
        if (!!costObj[resourceType]) {
            costMap.set(resourceType, costObj[resourceType]);
        }
    })
    return costMap;
}

function createDefaultStatePromise() {
    return getInitialCards()
        .then(
            (cardArray) => {
                let cardRows = new Array(Config.mineBoardRows);
                for (let startIndex = 0; startIndex < cardArray.length; startIndex += Config.mineBoardRowSize) {
                    cardRows.push(
                        cardArray.slice(startIndex, startIndex + Config.mineBoardRowSize)
                            .map((card) => ({...card, cost: getResourceCostMap(card.cost)})));
                }
                return cardRows
            })
        .then((cardRows) => ({
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
                rows: cardRows,
            },
            hand: {
                mines: [],
                resources: new Map(
                    Config.resourceTypes.map((resourceType) => ([resourceType, 0])
                ))
            }
        }));
}

export default DefaultStatePromise;
