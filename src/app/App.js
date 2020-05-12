import { CssBaseline } from '@material-ui/core';
import React from 'react';
import Application from '../features/Application';
import UserProvider from '../features/providers/UserProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <CssBaseline />
        <Application />
      </UserProvider>
    </div>
  );
}

export default App;
