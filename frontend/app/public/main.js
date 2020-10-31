;(async function () {
  const URL = 'http://31.148.136.80:5000'
  const { main } = JSON.parse(localStorage.getItem('persist:root'))
  const TOKEN = JSON.parse(main).UIState.token

  const listAreas = []
  let object = {}

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

  const featchAPI = async (api, method, body) => {
    try {
      const res = await fetch(`${URL}/${api}`, {
        method,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${TOKEN}`,
        },
        body:
          method === 'POST'
            ? JSON.stringify({
                body,
              })
            : null,
      })
        .then((res) => res.json())
        .then((data) => data)

      return res
    } catch (errors) {
      console.log(errors.error)
    }
  }

  featchAPI('areas', 'GET').then((data) => listAreas.push(...data))

  featchAPI('object/5453', 'GET').then((data) => Object.assign(object, data))
})()
