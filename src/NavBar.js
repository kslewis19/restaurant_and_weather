import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
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
      {location.pathname.includes("/restaurants") ? (
        <Link to="/weather/null">Check Weather </Link>
      ) : (
        <div> Check Weather</div>
      )}
      {location.pathname.includes("/weather") ? (
        <Link to="/restaurants/null/null">Search For Restaurants </Link>
      ) : (
        <div> Search For Restaurants</div>
      )}
    </div>
  );
}
