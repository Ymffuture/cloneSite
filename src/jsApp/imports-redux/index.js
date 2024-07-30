
import { combineReducers } from 'redux';
import { cartReducer ,addressReducer,cardReducer } from '../redux/Reducers';

const rootReducer = combineReducers({
    cart: cartReducer,
    card: cardReducer,
    address: addressReducer,
  });
  
  export default rootReducer;