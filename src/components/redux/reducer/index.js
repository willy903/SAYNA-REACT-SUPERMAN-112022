import handleCart from './handleCart';
import handleAuth from './handleAuth';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    handleCart,handleAuth
})

export default rootReducers; 