import React from 'react';
import Factory from './Factory.js';
import './FactoryBoard.css';

export default function FactoryBoard(props) {
  return (
      <div className="FactoryBoard-container">
        <div className="FactoryBoard-text">Splendid!</div>
        {props.factoriesByRow.map((row, rowIndex) => (
            <div className="FactoryBoard-row" key={rowIndex}>
              {row.map((item, itemIndex) => (
                  <Factory
                      key={itemIndex}
                      factory={item}
                      onFactoryClick={() => props.onFactoryClick(rowIndex, itemIndex)} />
              ))}
            </div>
        ))}
      </div>
  );
}
