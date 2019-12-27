import { createStore } from 'redux';

import rootReducer from './reducers';

function configureStore() {
  return createStore(rootReducer, {
    serviceWorkerInitialized: false,
    serviceWorkerUpdated: false,
    serviceWorkerRegistration: null,
  });
}

export default configureStore;
