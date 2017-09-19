// @flow

import React from 'react';
import FactoryComponent from './FactoryComponent.js';
import './FactoryBoard.css';

import type { ResourceFactory } from '../../model/State.js';

export type FactoryBoardProps = {|
  factoriesByRow: Array<Array<ResourceFactory>>,
|};

export default function FactoryBoard(props:FactoryBoardProps) {
  return (
      <div className="FactoryBoard-container">
        <div className="FactoryBoard-text">Splendid!</div>
        {props.factoriesByRow.map((row, rowIndex) => (
            <div className="FactoryBoard-row" key={rowIndex}>
              {row.map((item, itemIndex) => (
                  <FactoryComponent
                      key={itemIndex}
                      rowIndex={rowIndex}
                      itemIndex={itemIndex} />
              ))}
            </div>
        ))}
      </div>
  );
}
