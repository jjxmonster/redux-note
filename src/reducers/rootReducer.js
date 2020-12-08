import {combineReducers} from 'redux';

import {appReducer} from './appReducers'

export const rootReducer = combineReducers({
    notes:appReducer,
})