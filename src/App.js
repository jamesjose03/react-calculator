import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Output from './components/Output';

class App extends Component {
  constructor() {
    super();
    this.state = {
      output: ""
    }
  }
  
  onClick = button => {
    if(button == "=") {
      this.getResult();
    }
    else if(button == "C") {
      this.clearScreen();
    }
    else if(button == "CE") {
      this.fnCE();
    }
    else {
      this.setState({
        output: this.state.output + button
      })
    }
  };
  
  getResult = () => {
    try {
      this.setState({
        output: (eval(this.state.output) || "") + ""
      })
    }
    catch(e) {
      this.setState({
        output: "Some error occured! Pls try again..."
      })
    }
  }

  clearScreen = () => {
    this.setState({
      output: ""
    })
  }

  fnCE = () => {
    this.setState({
      output: this.state.output.slice(0,-1)
    })
  }

  render() {
    return (
      <div>
        <div className = "calc-main">
          <h1 className = "calc-heading">Basic Calculator using React.js</h1>
          <Output output = {this.state.output} />
          <Input onClick = { this.onClick }/>
        </div>
      </div>  
    )
  }
}

export default App;