import React            from 'react' ;
import { connect }      from 'react-redux';
import BoardCellList    from './BoardCellList.jsx'; 
import LivingCellsList  from './LivingCellsList.jsx';
import Square from './Square.jsx';
const actions = require('../actions/actions.jsx');

class Board extends React.Component{
  constructor(props){
    super(props)
    
  this.squareCreator = this.squareCreator.bind(this); 
  
  }
  //change to es5 function to make it testable
  squareCreator = (numOfSquares,className) => {
    return [...Array(numOfSquares)].map((x,i)=>{
           return (<Square key={i} className={className}/>) 
          })
  }
  render()
  {
  return(
    <div id="boardAndLivingCellsContainer">
      <BoardCellList/>
      <LivingCellsList/>
    </div>
  );
  }
}

export default Board;