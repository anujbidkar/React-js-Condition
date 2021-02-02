
import React,{useState} from 'react';
import './Anuj.css';

function App() {


  const [my_condition,ChangeMyCondtion]=useState(false)



  let MyDiv = '';

  const showMYdiv = () =>
  {
    ChangeMyCondtion(true);
  }
  const HideMYdiv = () =>
  {
    ChangeMyCondtion(false);
  }


  if(my_condition)
  {
        
        MyDiv = (
            <div className="MyDiv">
            <h5>Current Status : {my_condition}  </h5>
            </div>
        );

  }
  else
  {

  }






  return (
    <div>
      <button className="myButton" onClick={showMYdiv}> Show Div</button>
      <button className="myButton" onClick={HideMYdiv}>To Hide Div</button>

      {MyDiv}


    </div>
    
  );
}

export default App;
