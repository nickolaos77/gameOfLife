import React      from 'react' ;
//import RecipeApp  from './RecipeApp.jsx';
import Board           from './Board.jsx';
import TopButtons      from './TopButtons.jsx'
import BottomButtons   from './BottomButtons.jsx'

class Buttons_And_Board_Cont extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <TopButtons/>
        <Board/>
        <BottomButtons/>
    
    <div id="bottomText">

      <span className="textColor marginLeft20" > Feel free to add cells while it's running. The cells in light red are younger, dark red are older. Enjoy!</span>
    </div>


  </div>

    );
  }
}

export default Buttons_And_Board_Cont;
