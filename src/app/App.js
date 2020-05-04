import React from 'react';
import Application from '../features/Application';
import UserProvider from '../features/providers/UserProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Application />
      </UserProvider>
    </div>
  );
}

export default App;
