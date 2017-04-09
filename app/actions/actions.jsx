//C.R.U.D. action generators
//---------------------------------------

export const addRecAG = (recipeName, ingredients) =>{
    return {
        type: 'ADD_RECIPE',
        recipeName,
        ingredients
    }
}

export const addRecipesAG = (recipes)=>{
  console.log("Action generator", recipes)
  return {
    type:'ADD_RECIPES',
    recipes
  }
}


export const delRecAG = (recipeIndex) =>{
    return {
        type: 'DEL_RECIPE',
        recipeIndex
    }
}

export const editRecAG = (recipeName, ingredients, recipeIndex) =>{
    return {
        type:'EDIT_RECIPE',
        recipeName,
        ingredients, 
        recipeIndex
    }
}


//Panel action generators
//---------------------------------------

export const expandPanelAG = recipeIndex => {
    return {
        type : 'EXPAND_PANEL',
        recipeIndex
    }
}

export const contractPanelAG = recipeIndex => {
    return {
        type : 'CONTRACT_PANEL',
        recipeIndex
    }
}

//Board selection action generators
//---------------------------------------

export const showSmallBoardAG = () => {
    return {
        type : 'SHOW_SMALL_BOARD',
    }
}

export const showMediumBoardAG = () => {
    return {
        type :'SHOW_MEDIUM_BOARD',
    }
}

export const showBigBoardAG = () => {
    return {
        type :'SHOW_BIG_BOARD',
    }
}


