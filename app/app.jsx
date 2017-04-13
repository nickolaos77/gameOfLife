import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import ReactRedux from 'react-redux';
const redux = require('redux');
const actions = require('./actions/actions.jsx');
const store   = require('./store/configureStore.jsx').configure();
//const RecipeAPI    =   require('./api/RecipeAPI.jsx')
//
import Buttons_And_Board_Cont from 'Buttons_And_Board_Cont.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Buttons_And_Board_Cont/>
  </Provider>,
  document.getElementById('app')
);

//subscribe to changes

//const unsubscribe = store.subscribe( ()=>{
//        let state = store.getState();
//        console.log("state", state);
//        
//    }
//);


//Dispatch the actions
//

var newArray = [...Array(1500)].map( ()=>{
  return Math.random() > 0.5 ? 1 : 0 ; 
} );

store.dispatch(actions.showSmallBoardAG());

store.dispatch(actions.nextGenAG(newArray,50));
store.dispatch(actions.nextGenAG(undefined,50));

var counter = 0
setInterval( function(){
  counter++;
  
  store.dispatch(actions.nextGenAG(undefined,50));}, 10 )



