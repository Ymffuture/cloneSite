import { combineReducers } from 'redux';
import { cartReducer } from '../actions/reducers';
import { cardReducer } from '../actions/reducers';
import { addressReducer } from '../actions/reducers'

// Root Reducer is a combination of all the reducers
// We could do this in an index.js folder in reducers but this is quicker
const rootReducer = combineReducers({
    cart: cartReducer,
    card: cardReducer, //This should match the state path i am trying to access
    address: addressReducer,
  });
  
  export default rootReducer;