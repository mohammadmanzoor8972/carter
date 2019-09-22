  
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer, {INITIAL_STATE} from '../reducer/index';
import promise from 'redux-promise';

const finalCreateStore = compose(
      applyMiddleware(promise),
      window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
  
const store = finalCreateStore(rootReducer, INITIAL_STATE);

export default store;  
    
