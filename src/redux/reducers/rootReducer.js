import { combineReducers } from 'redux';
import { convReducer } from './convReducer';

const rootReducer = combineReducers({
    convReducer: convReducer
});

export default rootReducer;