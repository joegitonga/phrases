// Dependencies
import { combineReducers } from 'redux';
//phrases reducers
//import phrases from '../reducers/phrasesReducer';
import phrases from '../../reducers/phrasesReducer';
// Shared Reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
    phrases,
    device
});

export default rootReducer;
