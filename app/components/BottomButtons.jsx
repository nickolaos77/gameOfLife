import React from 'react' ;
import { connect } from 'react-redux';
const actions = require('../actions/actions.jsx');

class BottomButtons extends React.Component{
  constructor(props){
    super(props) 
    
    
    this.showSmallBoard  = this.showSmallBoard.bind(this)
    this.showMediumBoard = this.showMediumBoard.bind(this)
    this.showBigBoard    = this.showBigBoard.bind(this)
  }
  
  showMediumBoard (){
    this.props.dispatch(actions.showMediumBoardAG());
  }
  
  showSmallBoard (){
    this.props.dispatch(actions.showSmallBoardAG());
  }
  
  showBigBoard (){
     this.props.dispatch(actions.showBigBoardAG());
  }  
 
  render(){
  return (
     <div id="bottomButtons">
      <span className="textColor marginLeft20 noTopMargin"> Board Size:</span>
      <button className="buttonBottom" onClick={this.showSmallBoard}>Size:50x30</button>
      <button className="buttonBottom" onClick={this.showMediumBoard}>Size:70x50</button>
      <button className="buttonBottom" onClick={this.showBigBoard}>Size:100x80</button>
     
        <span className="textColor marginLeft20 noTopMargin"> Sim Speed:</span>
        <button className="buttonBottom ">Slow</button>
        <button className="buttonBottom ">Medium</button>
        <button className="buttonBottom ">Fast</button>
      
    </div>
  
  );
   
  }
}

module.exports = connect()(BottomButtons);

