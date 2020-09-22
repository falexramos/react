import React from 'react';
import './App.css';

/* function Helloword( props){
  return(
  <div id="hello">
    <h3>{props.subtitle}</h3>
    {props.mytext}
    
  </div>
  )
} */

class Helloword extends React.Component{
  
  state={
    show:true
  }

  toggleshow = () => {
    this.setState({show : !this.state.show})
  }
  render () {
    if (this.state.show){
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}    
          <button onClick={this.toggleshow }> Toggle show </button>
        </div>
      )
    } else{
      return <h1>
      there are not elements
      <button onClick={this.toggleshow}>
        Toggle show
      </button>
      </h1>
    }
    
  }
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
