import { Route, Switch } from "react-router-dom";
import "./App.css";
import RestaurantApp from "./restaurantComponents/App.js";
import WeatherApp from "./weatherComponents/App.js";
import HomeScreen from "./HomeScreen.js";
import ErrorComponent from "./ErrorComponent";
import { LocationProvider } from "./LocationContext.js"

function App() {
  return (
    <LocationProvider>
      <div className="App">
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/weather/:zip" component={WeatherApp} />
          <Route path="/restaurants/:lat/:lng" component={RestaurantApp} />
          <Route component={ErrorComponent} />
        </Switch>
      </div>
    </LocationProvider>
  );
}

export default App;
