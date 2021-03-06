import { Route, Switch } from "react-router-dom";
import "./App.css";
import RestaurantApp from "./restaurantComponents/App.js";
import WeatherApp from "./weatherComponents/App.js";
import HomeScreen from "./HomeScreen.js";
import ErrorComponent from "./ErrorComponent";
import { LocationProvider } from "./LocationContext.js"
import { ThemeProvider } from "./ThemeContext.js"

function App() {
  return (
    <LocationProvider>
      <ThemeProvider>
        <div className="App">
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/weather/" component={WeatherApp} />
            <Route path="/restaurants/" component={RestaurantApp} />
            <Route component={ErrorComponent} />
          </Switch>
        </div>
      </ThemeProvider>
    </LocationProvider>
  );
}

export default App;
