import improvedStateCreator from './helperFunctions/gameLogic.js'

//C.R.U.D. Recuder
//----------------

var nextRecipeIndex = 1;

export const crudRecReducer = (state = [], action)=>{
    
    switch (action.type){
        
        case 'ADD_RECIPE':
            {//create a block of scope
            let newState = state.concat([{recipeName : action.recipeName,
                                                 ingredients: action.ingredients,
                                                 recipeIndex: nextRecipeIndex++ }]);
            return newState;
            }
        
        case 'ADD_RECIPES':{
          return [...action.recipes];
          
        }    
        case 'EDIT_RECIPE':
            {//create a block of scope
            let newState =state.filter(function(recipe){
                return recipe.recipeIndex !== action.recipeIndex ;
            });
            newState = newState.concat([{recipeName : action.recipeName,
                                                 ingredients: action.ingredients,
                                                 recipeIndex: action.recipeIndex }]);
            return newState; 
            }               
        case 'DEL_RECIPE':
            {//create a block of scope
            let newState =state.filter(function(recipe){
                return recipe.recipeIndex !== action.recipeIndex ;
            })
            return newState;
            }
            
        default:
            return state;
    };   
};

function intervalCreator (timeStep,dispatch,actionGenerator){
  var myInterval = setInterval( (timeStep)=>{
  dispatch(actionGenerator(undefined,50))}, timeStep )
  return myInterval;
}

var intervalState = {
  intervalRunning:'No',
  currentInterval:"None",
  timeStep:100,
  intervalCreator}

//Activity state reducer 
//--------------
export const intervalReducer = (state = intervalState, action)=>{
  switch (action.type){
    case 'RUN': 
      return {intervalRunning:'Yes',currentInterval:action.currentInterval,timeStep:action.timeStep, intervalCreator};
    case 'PAUSE':
      var intervalToBeCleared = state.currentInterval
      clearInterval(intervalToBeCleared);
      return {intervalRunning:'No',intervalCreator, currentInterval:"None",timeStep:action.timeStep};
    default:
      return state;
  }
}

//Generations counter reducer
//---------------------------

export const gererationsCountingReducer = (state=0, action) =>{
  switch(action.type){
    case "INCREMENT":
      return state + 1 ;
    case "INITIALIZE":
      return 0;
    default:
      return state; 
  }
}


//Next state reducer 
//--------------
export const newGenerationReducer = (state=[], action) => {
  switch (action.type){
      case 'CREATE_THE_NEXT_GEN':
          if (action.boardState){  
            return improvedStateCreator(action.boardState,action.numOfCols)}
          else {return improvedStateCreator(state,action.numOfCols)}  
      case 'INSERT_LIVING_CELL':
          var newState = [...state];
              newState[action.cellIndex] = 1;
           return newState;
      case 'CLEAR_THE_BOARD':
          // I create an array filled with zeros because with nulls it didn't work
          var newState = Array.apply(null, new Array(1500)).map(Number.prototype.valueOf,0); 
          return newState;
      default:
          return state;   
}
};

//Board size reducer
//-------------//

export const boardSizeReducer = (state='MEDIUM_BOARD_SHOWING',action)=>{
switch (action.type){
        case 'SHOW_MEDIUM_BOARD':
            return 'MEDIUM_BOARD_SHOWING';
            
        case 'SHOW_SMALL_BOARD':
            return 'SMALL_BOARD_SHOWING'; 
    
        case 'SHOW_BIG_BOARD':
            return "BIG_BOARD_SHOWING";
        
         default:
            return state;
}
}

