import React from 'react';
import './PlayerResourceSupply.css';
import RESOURCE_COLORS from '../ResourceColorMap.js';

export default function PlayerResourceSupply(props) {
  return (
      <div className="PlayerResourceSupply-container" style={{ backgroundColor: RESOURCE_COLORS[props.resource] }}>
        <div className="PlayerResourceSupply-factoryCount">{props.factoryCount}</div>
        <span>+</span>
        <div className="PlayerResourceSupply-resourceCount">{props.resourceCount}</div>
      </div>
  );
}
