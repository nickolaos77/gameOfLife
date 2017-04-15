import React from 'react' ;
import { connect } from 'react-redux';
const actions   = require('../actions/actions.jsx');

class TopButtons extends React.Component{
  constructor(props){
    super(props)

    this.intervalStarter = this.intervalStarter.bind(this);
    this.intervalCleaner = this.intervalCleaner.bind(this);  
  }
 
componentDidMount() {
  this.intervalStarter();
}  
  

  
intervalStarter(){
  if (this.props.myInterval.intervalRunning=='No'){
    
  var myInterval = this.props.myInterval.intervalCreator(this.props.myInterval.timeStep,this.props.dispatch,actions.nextGenAG); 
  //this.props.dispatch(actions.incrementAG());  
  this.props.dispatch(actions.runAG(myInterval,this.props.myInterval.timeStep));
  }
}
  
intervalCleaner(timeStep){
  this.props.dispatch(actions.pauseAG(timeStep));
}  
    
  render(){
  return (
    <div id="topButtons">
      <button className="buttonTop" onClick ={ ()=>{this.intervalStarter()}}>Run</button>
      <button className="buttonTop" onClick ={ ()=>{this.intervalCleaner(this.props.myInterval.timeStep)}}>Pause</button>
      <button className="buttonTop" onClick={()=>{
          this.intervalCleaner(this.props.myInterval.timeStep)
          this.props.dispatch(actions.initializeAG())
          this.props.dispatch(actions.boardClearerAG())}}>Clear</button>
      <span className="textColor marginLeft20"> Generation:{this.props.generations}</span>
    </div>
  
  ); 
  }
}

module.exports = connect(
  (state)=>{
    return{
       myInterval  :state.myInterval,
       generations :state.generations
      //now myInterval is available as this.props.myInterval 
    };
  }
)(TopButtons);