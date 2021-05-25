import "./App.css";
import RestaurantViewer from "./RestaurantViewer";
import AddressForm from "./AddressForm";
import { useState, useEffect, useContext } from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import NavBar from "../NavBar.js";
import { LocationContext } from "../LocationContext"


function App(props) {
  const [hasAdd, setHasAdd] = useState(false);
  const { zip, setZip, lat, setLat, lng, setLng, coords, setCoords } = useContext(LocationContext);


  useEffect(() => {
    if (lat != null) setHasAdd(true)
  }, [])
  return (
    <div
      className="root"
      style={{ backgroundColor: "beige", minHeight: "100vh" }}
    >
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "beige",
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
