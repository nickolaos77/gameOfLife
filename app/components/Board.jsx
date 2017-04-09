import React            from 'react' ;
import { connect }      from 'react-redux';
//import Square           from './Square.jsx';
//const actions = require('../actions/actions.jsx');

class Board extends React.Component{
  constructor(props){
    super(props)
  }
  
  squareCreator = (numOfSquares) => {
    
  }
  
  render(){   
   if(this.props.boardSize === "SMALL_BOARD_SHOWING"){   
      return (
        <div id="boardSmall" >
          { [...Array(1500)].map((x,i)=>{
           return (<div key={i} className="square"></div>) 
          })}
        </div>
      );
   }
   if(this.props.boardSize === "MEDIUM_BOARD_SHOWING"){   
      return (
        <div id="boardMedium" >
          { [...Array(3500)].map((x,i)=>{
           return (<div key={i} className="square"></div>) 
          })}
        </div>
      );
   }
   if(this.props.boardSize === "BIG_BOARD_SHOWING"){   
      return (
        <div id="boardBig" >
          { [...Array(8000)].map((x,i)=>{
           return (<div key={i} className="squareSmall"></div>) 
          })}
        </div>
      );
   }    
    
  }
}

module.exports = connect(
  (state)=>{
    return{
      boardSize:state.boardSize //now boardSize can be accesible inside the Board component as this.props.boardSize 
    };
  }
)(Board);
