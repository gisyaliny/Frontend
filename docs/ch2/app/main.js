import Map from "esri/Map";
import SceneView from "esri/views/SceneView";

const map = new Map({
  basemap: "topo",
});

const view = new SceneView({
    container : "mainDiv",
    map: map,
    center:[-118.805, 34.027],
    zoom: 13,
});
