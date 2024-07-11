var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
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
        "yaw": 1.165644864178475,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.22854498253349576,
          "pitch": 0.13769547559415685,
          "rotation": 3.141592653589793,
          "target": "1-wash-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wash-area",
      "name": "Wash area",
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
          "yaw": -0.0443824128337873,
          "pitch": 0.059825048562208494,
          "rotation": 3.141592653589793,
          "target": "2-dining"
        },
        {
          "yaw": 1.515277268341766,
          "pitch": 0.18120852498995532,
          "rotation": 3.141592653589793,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "Dining",
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
        "yaw": -2.0700640246254878,
        "pitch": 0.005637423850917145,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.5271716760417862,
          "pitch": 0.04927225095959997,
          "rotation": 3.141592653589793,
          "target": "1-wash-area"
        },
        {
          "yaw": -2.2330560231573067,
          "pitch": 0.13843783440008295,
          "rotation": 3.141592653589793,
          "target": "3-kitchen-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen-1",
      "name": "Kitchen-1",
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
        "yaw": 1.7219090218607338,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.906716460995348,
          "pitch": -0.010658607934951547,
          "rotation": 3.141592653589793,
          "target": "4-kitchen-2"
        },
        {
          "yaw": 2.5190115374933093,
          "pitch": 0.023271281744236205,
          "rotation": 0,
          "target": "5-work-area-1"
        },
        {
          "yaw": -2.589210297453331,
          "pitch": 0.1007888533229071,
          "rotation": 3.141592653589793,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen-2",
      "name": "Kitchen-2",
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
          "yaw": 2.740838206112638,
          "pitch": 0.0018797568267672204,
          "rotation": 3.141592653589793,
          "target": "3-kitchen-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-work-area-1",
      "name": "Work area-1",
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
        "yaw": 1.2855631476402998,
        "pitch": -0.003759513653534441,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.5692360988382745,
          "pitch": -0.02962778931129506,
          "rotation": 3.141592653589793,
          "target": "6-work-area-2"
        },
        {
          "yaw": -1.2398288104551511,
          "pitch": 0.05007043346508944,
          "rotation": 3.141592653589793,
          "target": "3-kitchen-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-work-area-2",
      "name": "Work area-2",
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
        "yaw": 1.4676570703071627,
        "pitch": -0.010156172158199084,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.603760249897336,
          "pitch": 0.006354194433356497,
          "rotation": 3.141592653589793,
          "target": "5-work-area-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "240129-nadil-re01",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
