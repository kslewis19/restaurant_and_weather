import "./App.css";
import RestaurantViewer from "./RestaurantViewer";
import AddressForm from "./AddressForm";
import { useState, useEffect } from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import NavBar from "../NavBar.js";


function App(props) {
  const [hasAdd, setHasAdd] = useState(false);
  const [coords, setCoords] = useState(`${props.match.params.lat},${props.match.params.lng}`);
  const [lat, setLat] = useState(props.match.params.lat);
  const [lng, setLng] = useState(props.match.params.lng);
  const [zip, setZip] = useState(0)

  useEffect(() => {
    if (lat != "null") setHasAdd(true)
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
