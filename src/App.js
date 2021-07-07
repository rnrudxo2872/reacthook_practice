import {HashRouter, Route} from 'react-router-dom'
import UseState from './useState';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={UseState}></Route>
    </HashRouter>
  );
}

export default App;
