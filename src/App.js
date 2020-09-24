import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      {/* <Greet name = "Rudresh Dixit">
        <p> This is a simple paragraph. </p>
      </Greet>
      <Greet name = "Parallel Universe"/>
      <Welcome></Welcome>
      <Hello></Hello> */}
      {/* <Message></Message> */}
      <Counter></Counter>


    </div>
  );
}

export default App;
