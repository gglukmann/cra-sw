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
  const serviceWorkerRegistration = useSelector(
    state => state.serviceWorkerRegistration,
  );

  const updateServiceWorker = () => {
    const waitingServiceWorker = serviceWorkerRegistration.waiting;

    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener('statechange', event => {
        if (event.target.state === 'activated') {
          window.location.reload();
        }
      });

      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
    }
  };

  return (
    <div className="App">
      <div className="App-alert">
        {isServiceWorkerInitialized && (
          <Alert text="Service Worker is initialized" type={SW_INIT} />
        )}
        {isServiceWorkerUpdated && (
          <Alert
            text="There is a new version available."
            type={SW_UPDATE}
            onClick={() => updateServiceWorker()}
          />
        )}
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Version 1.4
        <p>
          <button onClick={() => dispatch({ type: SW_INIT })}>Init</button>
          <br />
          isServiceWorkerInitialized:{' '}
          {JSON.stringify(isServiceWorkerInitialized)}
        </p>
        <p>
          <button onClick={() => dispatch({ type: SW_UPDATE })}>Update</button>
          <br />
          isServiceWorkerUpdated: {JSON.stringify(isServiceWorkerUpdated)}
        </p>
      </header>
    </div>
  );
}

export default App;
