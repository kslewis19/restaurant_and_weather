import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "30%"
      }}
    >
      <Link to="/">Home </Link>
      {location.pathname === "/restaurants" ? (
        <Link to="/weather">Check Weather </Link>
      ) : (
        <div> Check Weather</div>
      )}
      {location.pathname === "/weather" ? (
        <Link to="/restaurants">Search For Restaurants </Link>
      ) : (
        <div> Search For Restaurants</div>
      )}
    </div>
  );
}
