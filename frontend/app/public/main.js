;(async function () {
  egip.setConfig({
    baseURL: '/',
    withCredentials: true,
  })

  let map = egip.layers.createMap({
    target: 'map',
    layers: [egip.layers.createTiles2GIS()],
    view: egip.layers.createViewWGS({
      zoom: 7,
    }),
  })

  egip.layers.switchMapTo3857(map)
})()
