import React             from 'react' ;
import { connect }       from 'react-redux';
import LivingCellsList from './LivingCellsList.jsx';
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
  
  
  
  
  render(){   
   if(this.props.boardSize === "SMALL_BOARD_SHOWING"){   
      return (
        <div id="boardSmall" >{ this.squareCreator(1500, "square")}
          <LivingCellsList boardState={this.props.boardState}/>     
        </div>
      );
   }
   if(this.props.boardSize === "MEDIUM_BOARD_SHOWING"){   
      return (
        <div id="boardMedium" >
         { this.squareCreator(3500,"square")}
               

        </div>
      );
   }
   if(this.props.boardSize === "BIG_BOARD_SHOWING"){   
      return (
        <div id="boardBig" >
          { this.squareCreator(8000, "squareSmall")}
         
        </div>
      );
   }    
    
  }
}

module.exports = connect(
  (state)=>{
    return{
      boardSize  :state.boardSize,
      boardState :state.boardState
      //now boardSize and boardState are available as this.props.boardSize and this.props.boardState
      
    };
  }
)(Board);
