import React from 'react';
import './App.css';
import Header from './components/Header/header';
import NavBar from './components/NavBar/navBar';
import Users from './components/Users/users'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Users />

    </div>
  );
}

export default App;

