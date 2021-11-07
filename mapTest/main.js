let map;
require([
  "esri/map",
  "esri/layers/ArcGISImageServiceLayer",
  "esri/layers/ImageServiceParameters",
  "dojo/parser",
  "dojo/domReady!",
], function (Map, ArcGISImageServiceLayer, ImageServiceParameters, parser) {
  parser.parse();

  map = new Map("map", {
    basemap: "topo-vector",
    center: [-18.8623, 65],
    zoom: 7,
  });

  var params = new ImageServiceParameters();
  params.noData = 0;
  var imageServiceLayer = new ArcGISImageServiceLayer(
    "https://image.discomap.eea.europa.eu/arcgis/rest/services/GioLandPublic/HRL_DominantLeafType_2018/ImageServer",
    {
      imageServiceParameters: params,
      opacity: 0.75,
    }
  );
  map.addLayer(imageServiceLayer);
});
