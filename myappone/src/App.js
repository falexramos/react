import React from 'react';
import './App.css';

function Helloword( props){
  return(
  <div id="hello">
    <h3>{props.subtitle}</h3>
    {props.mytext}
    
  </div>
  )
}


function App() {
  return (
    <div >This is my component: 
      <Helloword mytext="Hello Favian" subtitle="lorem ipsum"/> 
      <Helloword mytext="Hola Mundo" subtitle="Component Two"/>
      <Helloword mytext="Hello Word" subtitle="Component three"/>
    </div>
  );
}

export default App;
