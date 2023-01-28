import React, { useEffect, useState } from 'react';

const shortId = require('shortid');

class Snake {
  
  array = [];

  constructor(row, col) {
    this.array[0] = {"row" : row, "col" : col};
  }
}

const SnakeGame = () => {

  const rowCount = 10;
  const colCount = 10;

  const [board, setBoard] = useState({});
  
  let snake = undefined;

  useEffect(() => {
    let list = [];
    for (let i = 0;i<rowCount;i++) {
      let temp = [];
      for (let j = 0;j<colCount;j++) {
        temp.push(false);
      }
      list.push(temp);
    }
    setBoard({"board" : list});
  }, []);

  const startGame = () => {
    createSnake();
  }

  const createSnake = () => {
    const rowPosition = Math.floor(Math.random() * (rowCount - 1)) + 1;
    const colPosition = Math.floor(Math.random() * (colCount - 1)) + 1;

    let tempArray = [];

    for (let i = 0;i<rowPosition;i++) {
      let tempRow = [];
      for (let j = 0;j<colPosition;j++) {
        if (i === rowPosition && j === colPosition) {
          tempRow.push(true);
        } else tempRow.push(false);
      }
      tempArray.push(tempRow);
    }

    setBoard({"board" : tempArray});

    console.log(JSON.stringify(board));
  }

  return (
    <div id="snake-game-div">
      <div id="snake-game-display">
        {
          board.board ? board.board.map((row, key1) => (
            // key = {key1} : Do not use array index as key
            <div className='snake-game-row-div' key={shortId.generate()}>
              {
                row.map((cell, key2) => (
                  <div className={'snake-game-cell-div' + (cell ? ' snake' : '')} key={shortId.generate()}>
                  </div>
                ))
              }
            </div>
          )) : null
        }
      </div>
      <div id="snake-game-btn-div">
        <button id="snake-game-start-btn"
          onClick={startGame}>시작하기</button>
      </div>
    </div>
  );
};

export default SnakeGame;