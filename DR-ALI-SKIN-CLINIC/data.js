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
        "yaw": 1.6638146097064226,
        "pitch": 0.005058378780063322,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 1.7578119432045138,
          "pitch": 0.031423912678999244,
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
        "yaw": 1.9851096436644173,
        "pitch": -0.007587568170080772,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": -0.9891350100770655,
          "pitch": 0.28392856231157637,
          "rotation": 3.141592653589793,
          "target": "2-waiting-area"
        },
        {
          "yaw": 0.8952577737860352,
          "pitch": 0.07340616824113866,
          "rotation": 3.141592653589793,
          "target": "3-passage"
        },
        {
          "yaw": -2.748520920741406,
          "pitch": 0.02094883769099809,
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
        "yaw": 0.6126461864143593,
        "pitch": -0.0025291893900245555,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 0.8271149351489342,
          "pitch": 0.27510386125263153,
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
        "yaw": 0.9314325447676364,
        "pitch": 0.0025363732241352466,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 1.523535425845206,
          "pitch": 0.4510331286336129,
          "rotation": 3.141592653589793,
          "target": "1-reception"
        },
        {
          "yaw": 3.074398962151397,
          "pitch": 0.0025363732241352466,
          "rotation": 0,
          "target": "4-dr-room-v1"
        },
        {
          "yaw": 2.576124537361882,
          "pitch": 0.03708340566849344,
          "rotation": 0,
          "target": "7-procedure-room-v2"
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
        "yaw": 1.8264431144409254,
        "pitch": -0.0027594474245304923,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 2.3408126596804184,
          "pitch": 0.2485908455936432,
          "rotation": 3.141592653589793,
          "target": "5-dr-room-v2"
        },
        {
          "yaw": -2.103181651461817,
          "pitch": 0.00017300375070128382,
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.22023947810509092,
          "pitch": 0.08887523369744166,
          "rotation": 3.141592653589793,
          "target": "4-dr-room-v1"
        },
        {
          "yaw": 0.6572862592010864,
          "pitch": 0.06287961492596494,
          "rotation": 0,
          "target": "6-procedure-room-v1"
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03826434667148071,
          "pitch": 0.01978320158065472,
          "rotation": 3.141592653589793,
          "target": "7-procedure-room-v2"
        },
        {
          "yaw": 1.4919006188257828,
          "pitch": 0.030306042843829317,
          "rotation": 0,
          "target": "8-pantry-v1"
        },
        {
          "yaw": -1.3708288872796714,
          "pitch": 0.1088225171544206,
          "rotation": 0,
          "target": "5-dr-room-v2"
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
        "yaw": 1.7335102320132885,
        "pitch": 0.0025295165596777025,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 2.3548645427498407,
          "pitch": 0.07379220600899927,
          "rotation": 3.141592653589793,
          "target": "6-procedure-room-v1"
        },
        {
          "yaw": -2.379913039933129,
          "pitch": 0.10979531941709375,
          "rotation": 0,
          "target": "3-passage"
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
        "yaw": 1.5546630311882268,
        "pitch": 0,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 1.3148767689505299,
          "pitch": 0.0628675860210759,
          "rotation": 3.141592653589793,
          "target": "9-pantry-v2"
        },
        {
          "yaw": -0.40849918306327737,
          "pitch": 0.09191323754505376,
          "rotation": 0,
          "target": "6-procedure-room-v1"
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
        "yaw": 1.6172057420790216,
        "pitch": 0.002530343689116421,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 2.0233829465227435,
          "pitch": 0.023969328248892197,
          "rotation": 3.141592653589793,
          "target": "8-pantry-v1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "230720 - DR.ALI's SKIN CLINIC",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
