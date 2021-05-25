import "./App.css";
import RestaurantViewer from "./RestaurantViewer";
import AddressForm from "./AddressForm";
import { useState, useEffect, useContext } from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import NavBar from "../NavBar.js";
import { LocationContext } from "../LocationContext"
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from "../ThemeContext"

function App(props) {
  const [hasAdd, setHasAdd] = useState(false);
  const { zip, setZip, lat, setLat, lng, setLng, coords, setCoords } = useContext(LocationContext);
  const { isDark } = useContext(ThemeContext)

  const useStyles = makeStyles((theme) => {
    if (isDark) {
      return (

        {
          root: {
            backgroundColor: "black", minHeight: "100vh",
            color: "white"
          },

        })
    }
    else return (
      {
        root: {
          backgroundColor: "beige", minHeight: "100vh"
        },

      }
    )
  });
  const classes = useStyles();
  useEffect(() => {
    if (lat != null) setHasAdd(true)
  }, [])
  return (
    <div
      className={classes.root}

    >
      <NavBar />
      <div className="root"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FastfoodIcon style={{ size: 20 }} />
        <h1>Restaurant Finder</h1>
      </div>
      {hasAdd ? (
        <RestaurantViewer coords={coords} lat={lat} lng={lng} zip={zip} />
      ) : (
        <AddressForm
          setHasAdd={setHasAdd}
          setCoords={setCoords}
          setLat={setLat}
          setLng={setLng}
          setZip={setZip}
        />
      )}
    </div>
  );
}

export default App;
