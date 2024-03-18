import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutingMachine = (props) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(20.6839, -103.3094),
      L.latLng(20.6839, -103.3098)
    ],

  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutingMachine);

export default RoutingMachine;