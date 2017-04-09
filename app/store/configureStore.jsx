var redux = require('redux');
import {boardReducer} from './../reducers/reducers'; 

export const configure =()=>{
const reducer = redux.combineReducers({
    boardSize :  boardReducer,
    //recipes   :  crudRecReducer,
});
 

//redux.compose allow us to add middleware functions. Here I add a function to use the redux dev tools
const store = redux.createStore(reducer, redux.compose( 
    window.devToolsExtension ? window.devToolsExtension(): f=>f
));
    return store;
}