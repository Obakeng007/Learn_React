import './App.css';
import Greet from './components/Greet';
import { Component } from 'react';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends Component{

  render(){
    return (
    <div  className='App'>

    {/* <Greet />
    <Welcome /> */}
    <Hello name= 'Obakeng'> You are a star.</Hello>
    <Hello name = 'Dusani;'/>
    <Hello name = 'Kagiso'/>

    </div>
    );
  }

}

export default App;
