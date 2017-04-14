import React from 'react' ;
import { connect } from 'react-redux';
const actions = require('../actions/actions.jsx');

class BottomButtons extends React.Component{
  constructor(props){
    super(props) 
    
    
    this.showSmallBoard  = this.showSmallBoard.bind(this);
    this.showMediumBoard = this.showMediumBoard.bind(this);
    this.showBigBoard    = this.showBigBoard.bind(this);
    this.intervalStarter = this.intervalStarter.bind(this);
    this.intervalCleaner = this.intervalCleaner.bind(this); 
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
 
  intervalStarter(timeStep){
  if (this.props.myInterval.intervalRunning=='No'){
  var myInterval = this.props.myInterval.intervalCreator(timeStep,this.props.dispatch,actions.nextGenAG);
  this.props.dispatch(actions.runAG(myInterval,timeStep));
  }
}
  
intervalCleaner(timeStep){
  this.props.dispatch(actions.pauseAG(timeStep));
}  
  
speedChanger(timeStep){
          if (this.props.myInterval.intervalRunning=='Yes') {
          new Promise((resolve,reject)=>{this.intervalCleaner(timeStep);
            resolve();                             
            }).then(()=>{this.intervalStarter(timeStep)}
                           )}}
  
  render(){
  return (
     <div id="bottomButtons">
      <span className="textColor marginLeft20 noTopMargin"> Board Size:</span>
      <button className="buttonBottom" onClick={this.showSmallBoard}>Size:50x30</button>
      <button className="buttonBottom" onClick={this.showMediumBoard}>Size:70x50</button>
      <button className="buttonBottom" onClick={this.showBigBoard}>Size:100x80</button>
     
        <span className="textColor marginLeft20 noTopMargin"> Sim Speed:</span>
        <button className="buttonBottom" onClick={()=>{  this.speedChanger(1500) }}>Slow</button>
        <button className="buttonBottom " onClick={()=>{ this.speedChanger(500) }}>Medium</button>
        <button className="buttonBottom " onClick={()=>{ this.speedChanger(50) }}>Fast</button>
      
    </div>
  
  );
   
  }
}
module.exports = connect(
  (state)=>{
    return{
       myInterval  :state.myInterval,
      //now myInterval is available as this.props.myInterval 
    };
  }
)(BottomButtons);
