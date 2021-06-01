import { useState } from 'react';

import './PascalTriangle.scss';

const SCREENS = {
  start: 'START',
  menu: 'MENU',
  result: 'RESULT',
};

const PascalTriangle = () => {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.start);
  const [pascalRows, setPascalRows] = useState(0);
  const [coords, setCoords] = useState('');

  const handleOptionClick = (e) => {
    if (!e.target.id) return;

    setPascalRows(e.target.id);
    setCurrentScreen(SCREENS.result);
  };

  const handleTriangleClick = (e) => {
    if (!e.target.id) return;

    setCoords(e.target.id);
  };

  const renderOptions = () => {
    const options = [];

    for (let i = 1; i <= 9; i++) {
      options.push(
        <button key={i} id={i} style={{ animationDelay: `${i * 0.3}s` }}>
          {i}
        </button>
      );
    }

    return options;
  };

  const renderPacalTriangle = () => {
    const triangle = [];
    triangle.push([1]);

    for (let i = 1; i < pascalRows; i++) {
      const currentRow = [];
      const prevRow = triangle[i - 1];

      currentRow.push(1);

      for (let j = 1; j < i; j++) {
        currentRow.push(prevRow[j - 1] + prevRow[j]);
      }

      currentRow.push(1);
      triangle.push(currentRow);
    }

    return triangle.map((row, y) => {
      return (
        <div key={y}>
          {row.map((item, x) => {
            const id = `X:${x} Y:${y}`;
            return (
              <div key={id} id={id}>
                {item}
              </div>
            );
          })}
        </div>
      );
    });
  };

  const renderScreens = () => {
    switch (currentScreen) {
      case SCREENS.menu:
        return (
          <div className="pascaltriangle__menu">
            <p>Select a number to generate Pascal's Triangle</p>
            <div onClick={handleOptionClick}>{renderOptions()}</div>
          </div>
        );
      case SCREENS.result:
        return (
          <div className="pascaltriangle__result">
            <button onClick={() => setCurrentScreen(SCREENS.menu)}>back</button>
            <h4>{`Current X Y: ${coords}`}</h4>
            <div onClick={handleTriangleClick}>{renderPacalTriangle()}</div>
          </div>
        );
      default:
        return (
          <div className="pascaltriangle__start">
            <button onClick={() => setCurrentScreen(SCREENS.menu)}>
              Start
            </button>
          </div>
        );
    }
  };

  return <div className="pascaltriangle">{renderScreens()}</div>;
};

export { PascalTriangle };
