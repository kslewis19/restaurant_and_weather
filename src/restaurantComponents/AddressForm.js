import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import { RoomSharp } from '@material-ui/icons';

const API_KEY = process.env.REACT_APP_REST_API_KEY

function AddressForm(props) {

    const [address, setAddress] = useState("")



    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("address submited ", address)
        fetchCoords()

    }
    const fetchCoords = () => {
        const url = new URL("https://maps.googleapis.com/maps/api/geocode/json?");
        url.searchParams.append("key", API_KEY);
        url.searchParams.append("address", address);


        const axios = require('axios');
        axios.get(url)
            .then(response => {
                const formated = response.data.results[0].geometry.location.lat + "," + response.data.results[0].geometry.location.lng
                props.setLat(response.data.results[0].geometry.location.lat)
                props.setLng(response.data.results[0].geometry.location.lng)
                props.setZip(response.data.results[0].address_components[7].short_name)
                props.setCoords(formated)
                props.setHasAdd(true)
            }, error => {
                console.log(error);
            });

    }


    return (
        <div className="Address">
            <h2> Please enter your address bellow to search for restaurants near you</h2>
            <form method="post" onSubmit={handleSubmit}>
                <TextField name='value' value={address} onChange={(event) => { setAddress(event.target.value) }} placeholder={'enter address'} >
                </TextField>
                <Button type="submit" variant="contained">Search</Button>
            </form>
        </div>
    )
}
export default AddressForm