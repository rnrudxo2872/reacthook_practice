import { useState } from 'react';
import './App.css';

const UserInput = (initValue, isValid) => {
  const [value, setValue] = useState(initValue)

  const onChange = (event) => {
    const {target} = event;

    const curValue = target.value;
    let isExec = false
    if(typeof isValid === "function"){
      isExec = isValid(curValue);
    }
    if(isExec){
      setValue(curValue);
    }
  }

  return{value,onChange}
}

function App() {
  const isValid = (value) => value.length < 5;
  const nameState = UserInput("now",isValid)
  return (
    <div className="App">
      <header className="App-header">
          <h1>UseState - Input</h1>
          <input {...nameState}/>
      </header>
    </div>
  );
}

export default App;
