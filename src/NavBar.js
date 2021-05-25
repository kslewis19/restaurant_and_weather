import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LocationContext } from "./LocationContext"
import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from "./ThemeContext"

export default function Navbar() {
  const location = useLocation();
  const { zip, setZip, lat, setLat, lng, setLng, coords, setCoords } = useContext(LocationContext);
  const { isDark, setIsDark } = useContext(ThemeContext)
  const history = useHistory()
  const useStyles = makeStyles((theme) => ({
    button: {
      color: "gray"
    }
  }));
  const classes = useStyles();
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
        width: "33%",
        backgroundColor: "lightgray"
      }}
    >
      <Button color="primary"
        onClick={() => {
          cleanContext()
          history.push("/")
        }}
      >
        Home
        </Button>
      {!location.pathname.includes("/weather") ? (
        <Button color="primary"
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
      {!location.pathname.includes("/restaurants") ? (
        <Button color="primary"
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
      <Button color="primary"
        onClick={() => {
          console.log("toggle")
          setIsDark(!isDark)

        }}
      >
        Dark Mode Toggle
        </Button>
    </div>
  );
}
