import React, { useState } from "react";
import {Marker, Popup, useMapEvents } from 'react-leaflet';
import userIcon from './icons/UserIcon'

export default function UserMarker({ animateRef }) {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        //aqui poner el boton de inicar
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, 17)
        },
    })

    return position === null ? null : (
        
        <Marker position={position} icon={userIcon}>
          <Popup>You are here</Popup> 
        </Marker>
      )
}
