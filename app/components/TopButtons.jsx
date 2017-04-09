import React from 'react' ;
import { connect } from 'react-redux';
//const actions = require('../actions/actions.jsx');

class TopButtons extends React.Component{
  constructor(props){
    super(props) 
  }
 
  render(){
  return (
    <div id="topButtons">
      <button className="buttonTop">Run</button>
      <button className="buttonTop">Pause</button>
      <button className="buttonTop">Clear</button>
      <span className="textColor marginLeft20"> Generation:</span>
    </div>
  
  );
   
  }
}

export default TopButtons;
