import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LocationContext } from "./LocationContext"
import Button from '@material-ui/core/Button';
import { useContext } from 'react';

export default function Navbar() {
  const location = useLocation();
  const { zip, setZip, lat, setLat, lng, setLng, coords, setCoords } = useContext(LocationContext);
  const history = useHistory()
  const cleanContext = () => {
    setZip(0)
    setLat(null)
    setLng(null)
    setCoords(null)
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "30%"
      }}
    >
      <Button
        onClick={() => {
          cleanContext()
          history.push("/")
        }}
      >
        Home
        </Button>
      {location.pathname.includes("/restaurants") ? (
        <Button
          onClick={() => {
            cleanContext()
            history.push("/weather")
          }}
        >
          Check Weather
        </Button>
      ) : (
        <div> Check Weather</div>
      )}
      {location.pathname.includes("/weather") ? (
        <Button
          onClick={() => {
            cleanContext()
            history.push("/restaurants")

          }}
        >
          Search For Restaurants
        </Button>
      ) : (
        <div> Search For Restaurants</div>
      )}
    </div>
  );
}
