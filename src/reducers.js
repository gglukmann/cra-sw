import { SW_INIT, SW_UPDATE } from './types';

function rootReducer(state = {}, action) {
  switch (action.type) {
    case SW_INIT:
      return {
        ...state,
        serviceWorkerInitialized: !state.serviceWorkerInitialized,
      };
    case SW_UPDATE:
      return {
        ...state,
        serviceWorkerUpdated: !state.serviceWorkerUpdated,
        serviceWorkerRegistration: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
