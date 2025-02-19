var APP_DATA = {
  "scenes": [
    {
      "id": "0-road-1",
      "name": "Road-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5669106215956425,
        "pitch": -0.08904913527494784,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.758536098926811,
          "pitch": 0.0066279550337053905,
          "rotation": 3.141592653589793,
          "target": "1-road-2"
        },
        {
          "yaw": 1.534670969028646,
          "pitch": 0.007848781205755273,
          "rotation": 0,
          "target": "2-ext-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-road-2",
      "name": "Road-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.8647850803776587,
        "pitch": -0.20169307510770906,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.8852635571181473,
          "pitch": -0.032548454859600895,
          "rotation": 3.141592653589793,
          "target": "0-road-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ext-01",
      "name": "Ext 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.809967196080792,
        "pitch": 0.019007566751421123,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.4898195976809845,
          "pitch": 0.03821798778394836,
          "rotation": 3.141592653589793,
          "target": "3-ext-02"
        },
        {
          "yaw": 2.6060712872129823,
          "pitch": -0.011420302049216957,
          "rotation": 3.141592653589793,
          "target": "4-ext-03"
        },
        {
          "yaw": 1.718968779416218,
          "pitch": -0.027972045845350735,
          "rotation": 3.141592653589793,
          "target": "5-sitout"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ext-02",
      "name": "Ext 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.3642063337016914,
        "pitch": -0.03816391511783479,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.1945792982437418,
          "pitch": -0.035698635879231944,
          "rotation": 3.141592653589793,
          "target": "2-ext-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ext-03",
      "name": "Ext 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.3945746381702655,
        "pitch": -0.061062264188535664,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "5-sitout",
      "name": "Sitout",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5475498671170484,
          "pitch": 0.07378356922780327,
          "rotation": 3.141592653589793,
          "target": "2-ext-01"
        },
        {
          "yaw": 1.6076438109387343,
          "pitch": 0.04005061419903733,
          "rotation": 0,
          "target": "6-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5745862787411795,
        "pitch": 0.0015110820192614227,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.0893151160708161,
          "pitch": 0.06379073195389218,
          "rotation": 3.141592653589793,
          "target": "7-dining-01"
        },
        {
          "yaw": -2.219955167479938,
          "pitch": 0.012798941410189002,
          "rotation": 0,
          "target": "5-sitout"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dining-01",
      "name": "Dining 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.9705382491672596,
        "pitch": 0.005088522015714858,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.15221080475852666,
          "pitch": 0.12805997809853586,
          "rotation": 3.141592653589793,
          "target": "8-dining-02"
        },
        {
          "yaw": 2.434998258031251,
          "pitch": 0.09124981184001868,
          "rotation": 3.141592653589793,
          "target": "12-stair"
        },
        {
          "yaw": 1.366999149563588,
          "pitch": 0.016315655205497492,
          "rotation": 3.141592653589793,
          "target": "11-kitchen"
        },
        {
          "yaw": -1.51165781103278,
          "pitch": 0.007310000237866987,
          "rotation": 0,
          "target": "6-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-dining-02",
      "name": "Dining 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.515196580729974,
        "pitch": 0.04988659749421842,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.39424068742263785,
          "pitch": 0.07096904292581918,
          "rotation": 0,
          "target": "9-bedroom-01"
        },
        {
          "yaw": 2.2021549329660255,
          "pitch": 0.0997678178453203,
          "rotation": 0,
          "target": "10-bedroom-02"
        },
        {
          "yaw": -2.2054622843954874,
          "pitch": 0.13711182668227018,
          "rotation": 3.141592653589793,
          "target": "7-dining-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-01",
      "name": "Bedroom 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.924312124270461,
        "pitch": 0.010178506899757522,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.6136746359061274,
          "pitch": 0.09677188958651328,
          "rotation": 3.141592653589793,
          "target": "8-dining-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bedroom-02",
      "name": "Bedroom 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.8371290373264966,
        "pitch": 0.00023129645526154263,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.219498957208069,
          "pitch": 0.002216111550360722,
          "rotation": 3.141592653589793,
          "target": "8-dining-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6936830912901364,
        "pitch": 0.007996726594342363,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 3.05679781364063,
          "pitch": 0.060732318393533546,
          "rotation": 3.141592653589793,
          "target": "7-dining-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-stair",
      "name": "Stair",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.773865594176823,
        "pitch": -0.03579345723189675,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.4055896941892758,
          "pitch": 0.43437804840603,
          "rotation": 3.141592653589793,
          "target": "7-dining-01"
        },
        {
          "yaw": 2.034645653449533,
          "pitch": -0.19270981467600024,
          "rotation": 3.141592653589793,
          "target": "13-stair-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-stair-2",
      "name": "Stair-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.3230102997518447,
        "pitch": -0.006466449004232544,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.729489670233745,
          "pitch": 0.49620507728899454,
          "rotation": 3.141592653589793,
          "target": "12-stair"
        },
        {
          "yaw": 1.4240162427981637,
          "pitch": -0.1745328359622711,
          "rotation": 3.141592653589793,
          "target": "14-1st-floor-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-1st-floor-01",
      "name": "1st Floor 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.1629600086352987,
        "pitch": -0.0025442610078556527,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.5324532358584229,
          "pitch": 0.17683365396674233,
          "rotation": 3.141592653589793,
          "target": "13-stair-2"
        },
        {
          "yaw": 2.5797558011736434,
          "pitch": 0.04832491534747163,
          "rotation": 3.141592653589793,
          "target": "15-1st-floor-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-1st-floor-02",
      "name": "1st Floor 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.8757409453590235,
        "pitch": -0.00582281289054265,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.518258227646953,
          "pitch": 0.05445126065181327,
          "rotation": 0,
          "target": "16-1st-floor-bedroom-01"
        },
        {
          "yaw": -0.03833038118824561,
          "pitch": 0.055008849932153936,
          "rotation": 0,
          "target": "17-1st-floor-bedroom-02"
        },
        {
          "yaw": 1.5386230133686478,
          "pitch": 0.013961358454386286,
          "rotation": 3.141592653589793,
          "target": "14-1st-floor-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-1st-floor-bedroom-01",
      "name": "1st Floor Bedroom 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.7463838117949333,
        "pitch": 0.012615675427483097,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.3635779541119692,
          "pitch": 0.012908851468120375,
          "rotation": 3.141592653589793,
          "target": "15-1st-floor-02"
        },
        {
          "yaw": -0.5170699253553881,
          "pitch": 0.0005543143684967333,
          "rotation": 0,
          "target": "18-balcony-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-1st-floor-bedroom-02",
      "name": "1st Floor Bedroom 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.1976900989397956,
        "pitch": -0.0011564822763006077,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.14306971716030326,
          "pitch": -0.020592373011307785,
          "rotation": 3.141592653589793,
          "target": "15-1st-floor-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-balcony-1",
      "name": "Balcony-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.502229820466546,
        "pitch": -0.005088522015711305,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.184781609218396,
          "pitch": 0.018903695326834224,
          "rotation": 3.141592653589793,
          "target": "19-balcony-2"
        },
        {
          "yaw": 2.1499056376936245,
          "pitch": 0.05219183556222973,
          "rotation": 0,
          "target": "16-1st-floor-bedroom-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-balcony-2",
      "name": "Balcony-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8495898815041034,
          "pitch": -0.03752025645581014,
          "rotation": 3.141592653589793,
          "target": "18-balcony-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "240161-Shyam ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
