//Generation counter action generators
//--------------------------------------
export const incrementAG = ()=>{
  return {
    type: "INCREMENT"
  };
}
export const initializeAG = ()=>{
  return {
    type: "INITIALIZE"
  };
}
//Run/Pause action generators
//---------------------------------------
export const runAG = (currentInterval,timeStep) =>{
  return {type:"RUN",
          currentInterval,
          timeStep
         }
}

export const pauseAG = (timeStep) =>{
  return {type:"PAUSE",
         timeStep}
}

//Next generation action generators
//---------------------------------------

export const nextGenAG = (boardState,numOfCols) => {
    return {
        type : 'CREATE_THE_NEXT_GEN',
        boardState,
        numOfCols
    }
}

export const insertLivingCellAG = ( cellIndex)=>{
  return {
      type:'INSERT_LIVING_CELL',
      cellIndex
  }
}

export const boardClearerAG = ()=>{
  return {
      type:'CLEAR_THE_BOARD',
      
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


