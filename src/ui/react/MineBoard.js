import React from 'react';
import './MineBoard.css';

const MineBoard = ({ mineBoard, onMineClick }) => (
    <div className="mineBoard">
        <div className="mineBoardText">Splendid!</div>
        {mineBoard.rows.map((row, rowIndex) => (
            <div key={rowIndex}>
                {row.map((item, itemIndex) => (
                    <MineBox key={itemIndex} item={item} onMineClick={() => onMineClick(rowIndex, itemIndex)} />
                ))}
            </div>
        ))}
    </div>
);

export default MineBoard;
