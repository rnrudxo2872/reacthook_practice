import {HashRouter, Route} from 'react-router-dom'
import UseState from './useState';
import UseEffect from './useEffect';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={UseEffect}></Route>
      <Route path="/useState" component={UseState}></Route>
    </HashRouter>
  );
}

export default App;
