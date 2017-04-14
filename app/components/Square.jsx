import React from 'react' ;
import { connect }      from 'react-redux';
const actions = require('../actions/actions.jsx');

class Square extends React.Component{
  constructor(props){
    super(props) 
    
    this.livingCellAdder = this.livingCellAdder.bind(this);
  }
  
  livingCellAdder(cellIndex){ 
      this.props.dispatch(actions.insertLivingCellAG(cellIndex)) 
  }
  
  render(){
  return (
      <div key={this.props.key} id={this.props.id} className={this.props.className} style = {this.props.style} onClick={()=>{this.livingCellAdder(this.props.id)}}></div>
  );
    
  }
}
//this is how I make available in my component the this.props.dispatch without having to listen to the state changes
module.exports = connect()(Square);
