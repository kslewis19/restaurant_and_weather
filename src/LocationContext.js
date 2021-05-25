import React, { createContext, useState } from "react"

export const LocationContext = createContext()

export function LocationProvider({ children }) {
    const [zip, setZip] = useState(0)
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [coords, setCoords] = useState(null)

    return (
        <LocationContext.Provider value={{ zip, setZip, lat, setLat, lng, setLng, coords, setCoords }}>
            {children}
        </LocationContext.Provider>
    )
}