var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
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
        "yaw": 1.4166254912459735,
        "pitch": -0.002055247080544831,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 1.8375131316006392,
          "pitch": 0.1025932251207724,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception",
      "name": "Reception",
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
        "yaw": -1.9720691203418141,
        "pitch": -0.0007643097359668616,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": -2.7015411575004045,
          "pitch": 0.05255270712122062,
          "rotation": 3.141592653589793,
          "target": "3-passage"
        },
        {
          "yaw": 1.2119040420668075,
          "pitch": 0.2069687722440463,
          "rotation": 3.141592653589793,
          "target": "2-waiting-area"
        },
        {
          "yaw": -0.505948418981772,
          "pitch": 0.110878920928279,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-waiting-area",
      "name": "Waiting Area",
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
        "yaw": 0.4738941299246342,
        "pitch": 0.002529189390031661,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 1.1929498831662286,
          "pitch": 0.1817323855042936,
          "rotation": 3.141592653589793,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-passage",
      "name": "Passage",
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
        "yaw": 1.5254345281086037,
        "pitch": -0.0025291893900138973,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 1.8781512600335004,
          "pitch": 0.09681256782636716,
          "rotation": 3.141592653589793,
          "target": "1-reception"
        },
        {
          "yaw": 2.7581750347144274,
          "pitch": 0.15680709355731537,
          "rotation": 0,
          "target": "6-procedure-room-v1"
        },
        {
          "yaw": -3.0720421977087735,
          "pitch": 0.18527334964714015,
          "rotation": 0,
          "target": "4-dr-room-v1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dr-room-v1",
      "name": "Dr Room-V1",
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
        "yaw": 1.5087545786785554,
        "pitch": 0,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 2.4364294130110133,
          "pitch": 0.17655952522340534,
          "rotation": 3.141592653589793,
          "target": "5-dr-room-v2"
        },
        {
          "yaw": -1.8866210872550244,
          "pitch": 0.1686982145254987,
          "rotation": 0,
          "target": "3-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dr-room-v2",
      "name": "Dr Room-V2",
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
        "yaw": 1.4046788573193858,
        "pitch": 0.002529189390031661,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 0.7261288394201841,
          "pitch": 0.13675243550186877,
          "rotation": 6.283185307179586,
          "target": "7-procedure-room-v2"
        },
        {
          "yaw": 0.25514990993181286,
          "pitch": 0.21629135702624325,
          "rotation": 3.141592653589793,
          "target": "4-dr-room-v1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-procedure-room-v1",
      "name": "Procedure Room-V1",
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
        "yaw": 1.3456463901516749,
        "pitch": 0.0030021028084057377,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 1.6696644417410038,
          "pitch": 0.047495192283026455,
          "rotation": 3.141592653589793,
          "target": "7-procedure-room-v2"
        },
        {
          "yaw": -2.98560000306518,
          "pitch": 0.12607990733667584,
          "rotation": 0,
          "target": "3-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-procedure-room-v2",
      "name": "Procedure Room-V2",
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
        "yaw": -0.9349978135683905,
        "pitch": -0.01770432573022518,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 0.5596885526600861,
          "pitch": 0.09538781832765508,
          "rotation": 0,
          "target": "8-pantry-v1"
        },
        {
          "yaw": -2.5076878646150487,
          "pitch": 0.06761865651006893,
          "rotation": 0,
          "target": "5-dr-room-v2"
        },
        {
          "yaw": -1.3637142749906026,
          "pitch": 0.08546373387206252,
          "rotation": 3.141592653589793,
          "target": "6-procedure-room-v1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-pantry-v1",
      "name": "Pantry-V1",
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
        "yaw": 2.120972329621363,
        "pitch": 0.010116757560126644,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 1.5948722927395362,
          "pitch": 0.0622015885185867,
          "rotation": 3.141592653589793,
          "target": "9-pantry-v2"
        },
        {
          "yaw": 0.23482547935122433,
          "pitch": 0.0038503543124015494,
          "rotation": 0,
          "target": "7-procedure-room-v2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-pantry-v2",
      "name": "Pantry-V2",
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
        "yaw": 1.6315104705331,
        "pitch": -7.692122103719612e-7,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 1.690355742312141,
          "pitch": 0.041143933309724545,
          "rotation": 3.141592653589793,
          "target": "8-pantry-v1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "230720-DR. ALI's CLINIC-Re-2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
