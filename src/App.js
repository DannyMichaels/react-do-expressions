/* eslint-disable no-unused-expressions */
import './App.css';
import { useState } from 'react';

const BlueComponent = () => (
  <div style={{ color: 'white', height: '20em', background: 'blue' }}>blue</div>
);
const RedComponent = () => (
  <div style={{ color: 'white', height: '20em', background: 'red' }}>red</div>
);
const GreenComponent = () => (
  <div style={{ color: 'white', height: '20em', background: 'green' }}>
    green
  </div>
);

function App() {
  const [color, setColor] = useState('blue');

  // HAML/ERB users are going to love this one...
  return (
    <>
      <div>
        {do {
          if (color === 'blue') {
            <BlueComponent />;
          } else if (color === 'red') {
            <RedComponent />;
          } else if (color === 'green') {
            <GreenComponent />;
          }
        }}
      </div>
      <div
        style={{
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'center',
        }}>
        {['blue', 'red', 'green'].map((color) => (
          <button
            style={{ width: '100px', marginRight: '20px', color }}
            onClick={() => setColor(color)}>
            {color}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
