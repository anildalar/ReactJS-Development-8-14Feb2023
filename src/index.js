// Import area
import React from 'react';
import ReactDOM from 'react-dom/client';


//Every Compoent can have its own data/states
class A extends  React.Component{
    //1.


  //2.
  constructor(){
    super();

    // State is a JS Object of the class which can hold some data
    this.state = {
                  name:"Rakesh",
                  surname:"Sharma",
                  address:"Manasa"
                }// state initialization

   
  }


  //3
  render(){

    // Updating the existing state
    this.setState({
      ...this.state, // ... is spread operator ES6
      name:"Suryabhan"
    });
    return  <>
              <h1>OKLABS {this.state.name} {this.state.surname}</h1>
              <h1>OKLABS {this.state.address}</h1>
              <h1>OKLABS {this.props.name}</h1>
              <h1>OKLABS {this.props.surname}</h1>
              <h1>OKLABS {this.props.children}</h1>
            </>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<A name="Anil" surname="Dollor">Neemuch</A>);