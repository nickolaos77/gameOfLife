import React from 'react' ;

class Square extends React.Component{
  constructor(props){
    super(props) 
  }
  
  render(){
  return (
      <div key={this.props.key} className={this.props.className} style = {this.props.style}></div>
  );
    
  }
}

export default Square;
