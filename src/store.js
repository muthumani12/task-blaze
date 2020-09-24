import {createStore, combineReducers} from 'redux'
import {todos, Detail} from './reducers'

export default createStore(combineReducers({todos, Detail}), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())