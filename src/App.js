import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import RestApp  from './restaurantComponents/App.js'

function App() {
  return (
    <div className="App">
     <RestApp/>
    </div>
  );
}

export default App;
