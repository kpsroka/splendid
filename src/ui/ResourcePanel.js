import React from 'react';
import ResourceStack from './ResourceStack';

const colors = ["red", "cyan", "green", "yellow", "orange"];

class ResourcePanel extends React.Component {
    constructor(props) {
        super(props);

        let stacks = new Map();
        for (let color of colors) {
            stacks.set(color, this.props.initialValue);
        }

        this.state = { stacks: stacks }
    }

    render() {
        let elems = [];
        this.state.stacks.forEach((value, key) =>
            elems.push(
                <ResourceStack bgColor={key} stackSize={value} key={key} />
            )
        )

        return (
            <div>{elems}</div>
        );
    }
}

export default ResourcePanel;
