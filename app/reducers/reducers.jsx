import newStateCreator from './helperFunctions/gameLogic.js'

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

//Panel Recuder 
//--------------

export const newGenerationReducer = (state=[], action) => {
  switch (action.type){
      case 'CREATE_THE_NEXT_GEN':
         
          if (action.boardState){  
            return newStateCreator(action.boardState,action.numOfCols)}
          else {return newStateCreator(state,action.numOfCols)}  
          
      default:
          return state;   
}
};

//Modal Recuder 
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
