import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import TodoListReducer from '../Reducers/TodoListReducer';
import GeneralReducer from '../Reducers/GeneralReducer';





//const  consoleToLog = ()=>{console.log('hi'};
//rerenders store when there is a change

export default ()=>{
    const store = createStore(
        combineReducers({TodoList: TodoListReducer,
            GeneralReducer:GeneralReducer, 
            
        }), applyMiddleware(thunk)
        );
        return store
}
//export default storeConfig();