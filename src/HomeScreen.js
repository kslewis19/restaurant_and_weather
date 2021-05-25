import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <div>
      <h1>Home</h1>
      <h2> What would you like to do?</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "space-between",
        }}
      >
        <div>
          <Link style={{ fontSize: 25 }} to="/weather">
            Check Weather
          </Link>
        </div>
        <div>
          <Link style={{ fontSize: 25 }} to="/restaurants">
            Search For Restaurants
          </Link>
        </div>
      </div>
    </div>
  );
}
