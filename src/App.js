import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import container from './App.css';

function App() {
  return (
    <div style={root}>
      <div className="container" style={container}>
        <Header />
        <Profile />
      </div>
    </div>
  );
}

export default App;

const root = {
  border: '2px black solid',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
