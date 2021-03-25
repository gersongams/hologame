import React from 'react';
import './App.css';
import Demo from './phaser'

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#125555',
  width: 800,
  height: 600,
  scene: Demo
};

const game = new Phaser.Game(config);

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
