import React from 'react';
import ResourceStack from './ResourceStack';

const colors = ["red", "cyan", "green", "yellow", "orange"];

class ResourcePanel extends React.Component {
    constructor(props) {
        super(props);

        let stacks = new Map();
        for (let color of colors) {
            stacks.set(color, {size: this.props.initialValue, highlight: 0});
        }

        this.state = { stacks: stacks }
    }

    onStackClicked(stackKey) {
        this.setState((prevState) => this.updateHighlight(prevState, stackKey));
    }

    updateHighlight(prevState, stackKey) {
        if (prevState.stacks.has(stackKey)) {
            this.updateStackHighlight(prevState.stacks.get(stackKey));
            return prevState;
        }
    }

    updateStackHighlight(prevStackState) {
        prevStackState.highlight = 1 - prevStackState.highlight;
    }

    render() {
        let elems = [];
        this.state.stacks.forEach((value, key) =>
            elems.push(
                <ResourceStack
                    bgColor={key}
                    stackSize={value.size}
                    key={key}
                    highlight={value.highlight}
                    onClickCallback={() => this.onStackClicked(key)} />
            )
        )

        return (
            <div>{elems}</div>
        );
    }
}

export default ResourcePanel;
