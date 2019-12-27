import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SW_INIT, SW_UPDATE } from './types';
import Alert from './Alert';
import logo from './logo.svg';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const isServiceWorkerInitialized = useSelector(
    state => state.serviceWorkerInitialized,
  );
  const isServiceWorkerUpdated = useSelector(
    state => state.serviceWorkerUpdated,
  );

  const handleClick = type => dispatch({ type });

  return (
    <div className="App">
      <div className="App-alert">
        {isServiceWorkerInitialized && (
          <Alert text="Service Worker is initialized" type={SW_INIT} />
        )}
        {isServiceWorkerUpdated && (
          <Alert text="Service Worker is updated" type={SW_UPDATE} />
        )}
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button onClick={() => handleClick(SW_INIT)}>Init</button>{' '}
          isServiceWorkerInitialized:{' '}
          {JSON.stringify(isServiceWorkerInitialized)}
        </p>
        <p>
          <button onClick={() => handleClick(SW_UPDATE)}>Update</button>{' '}
          isServiceWorkerUpdated: {JSON.stringify(isServiceWorkerUpdated)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
