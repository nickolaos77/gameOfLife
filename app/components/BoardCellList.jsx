import React            from 'react' ;
import { connect }      from 'react-redux';
//import BoardCellList    from './BoardCellList.jsx'; 
import Square from './Square.jsx';
const actions = require('../actions/actions.jsx');

class BoardCellList extends React.Component{
  constructor(props){
    super(props)
    
  this.squareCreator = this.squareCreator.bind(this); 
  
  }
  //change to es5 function to make it testable
  squareCreator = (numOfSquares,className) => {
    return [...Array(numOfSquares)].map((x,i)=>{
          if (i==1000){console.log("I just updated")}
           return (<Square key={i} id={i} className={className} />) 
          })
  }
    render(){
      return(
      <div id="boardSmall">
        {this.squareCreator(1500, "square")}
      </div>
        )
    }

}


export default BoardCellList;