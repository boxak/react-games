import React, { useEffect, useState } from 'react';

const shortId = require('shortid');

const SnakeGame = () => {

  const rowCount = 10;
  const colCount = 10;

  const [board, setBoard] = useState([]);

  useEffect(() => {
    let list = [];
    for (let i = 0;i<rowCount;i++) {
      let temp = [];
      for (let j = 0;j<colCount;j++) {
        temp.push(false);
      }
      list.push(temp);
    }
    setBoard(list);
  }, []);

  return (
    <div id="snake-game-div">
      <div id="snake-game-display">
        {
          board ? board.map((row, key1) => (
            // key = {key1} : Do not use array index as key
            <div className='snake-game-row-div' key={shortId.generate()}>
              {
                row.map((cell, key2) => (
                  <div className='snake-game-cell-div' key={shortId.generate()}>
                  </div>
                ))
              }
            </div>
          )) : null
        }
      </div>
      
    </div>
  );
};

export default SnakeGame;