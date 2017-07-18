import React from 'react';
import './MineBoard.css';
import MineBox from './MineBox';

const MineBoard = ({mineBoard, onMineClick}) => (
    <div className="mineBoard">
      <div className="mineBoardText">Splendid!</div>
      {mineBoard.rows.map((row, rowIndex) => (
          <div className="mineBoardRow" key={rowIndex}>
            {row.map((item, itemIndex) => (
                <MineBox key={itemIndex} mine={item} onMineClick={() => onMineClick(rowIndex, itemIndex)}/>
            ))}
          </div>
      ))}
    </div>
);

export default MineBoard;
