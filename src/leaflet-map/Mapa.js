import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import UserMarker from './configs/UserMarker'
import RoutingMachine from './configs/routing/createRouting'

function Mapa() {

    return (
        <MapContainer style={{ height: '100vh', width: '100vw' }} center={[20.6839, -103.3094]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* macador del usuario */}
            <UserMarker />
            <RoutingMachine  />
        </MapContainer>
    )
}

export default Mapa;