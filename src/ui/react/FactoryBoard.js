import React from 'react';
import FactoryComponent from '../components/FactoryComponent.js';
import './FactoryBoard.css';

export default function FactoryBoard(props) {
  return (
      <div className="FactoryBoard-container">
        <div className="FactoryBoard-text">Splendid!</div>
        {props.factoriesByRow.map((row, rowIndex) => (
            <div className="FactoryBoard-row" key={rowIndex}>
              {row.map((item, itemIndex) => (
                  <FactoryComponent
                      key={itemIndex}
                      factory={item}
                      rowIndex={rowIndex}
                      itemIndex={itemIndex}
                      onFactoryClick={() => props.onFactoryClick(rowIndex, itemIndex)} />
              ))}
            </div>
        ))}
      </div>
  );
}
