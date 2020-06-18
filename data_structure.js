/**
 * This is the dummy data that we will for the application for the first scenen to have a baseiss
 * on how to make the functions that will render things
 * 
 * TODO:
 * 
 * 1. We need to make the factory that will generate the elements and its children
 * 2. We need to take Payload and generate application init build DOM off payload
 * 3. We take the animations after the dom elements are being built so we can create timeline instances for scenes
 * 4. Create and attach animations from payload as tweens on the relevant timelines
 * 5. create a loader that will load everything and then show
 * 6. Cleanup code (remove old scene code) and update CSS to use variables
 * 7. Responsive update for the application
 * 8. look at new view that will render a list of novels and how to display it with below data as an array (ideally only details)
 * 9. look into modelling out the API that will hold and research the backend infrustructure 
 */
const DUMMY_DATA = {
  "details": {
    "title": "title of the novel goes here",
    "subText": "This is the subtext of the novel",
    "author": "Author Name",
    "description": "This is a random description of what will be rendered",
    "styles": "background: url(./assets/header/cover.jpg);background-size: cover;background-position: center center;"
  },
  "scenes": [
    {
      "styles": "",
      "duration": 20,
      "layers": {
        "sceneInfo": [
          {
            "position": "top-left",
            "content":  "Transitions between multiple layered assets",
            "animation": {
              "startAt": 0,
              "from": {
                "opacity": 0,
                "duration": 8,
              },
              "to": {
                "opacity": 1,
                "duration": 8,
              }
            }
          },
          {
            "position": "bottom-right",
            "content":  "Each image with their own styles",
            "animation": {
              "startAt": 2.5,
              "from": {
                "opacity": 0,
                "duration": 8,
              },
              "to": {
                "opacity": 1,
                "duration": 8,
              }
            }
          }
        ],
        "sceneAssets": [
          {
            "src": "./assets/scene_1/layer3.jpg",
            "styles": "width: 100%; height: 100%;",
          },
          {
            "src": "./assets/scene_1/layer2.png",
            "styles": "bottom: -5px;left: -300px; height: 100%;",
            "animation": {
              "startAt": 0,
              "from": {},
              "to": {
                "x": -100,
                "duration": 12,
              }
            }
          },
          {
            "src": "./assets/scene_1/layer1.png",
            "styles": "bottom: 0;",
            "animation": {
              "startAt": 0,
              "from": {},
              "to": {
                "x": -50,
                "duration": 12,
              }
            }
          }
        ]
      }
    },
    {
      "styles": "",
      "layers": {
        "sceneInfo": [],
        "sceneAssets": [
          {
            "isTransparent": true,
            "styles": "width: 100%; height: 100%;background: url(./assets/scene_3/scene_3.jpg);background-size: cover;background-repeat: no-repeat",
          },
          {
            "isTransparent": true,
            "styles": "width: 100%; height: 100%;background: url(./assets/scene_3/scene_2.png);background-size: cover;position:absolute;background-position: 0vw;background-repeat: no-repeat;background-position-y: bottom;",
            "animation": {
              "startAt": 0,
              "from": {},
              "to": {
                "scale": 0.8,
                "bottom": "-=200",
                "y": "+=150",
              }
            }
          },
          {
            "isTransparent": true,
            "styles": "width: 100%; height: 100%;background: url(./assets/scene_3/scene_1.png);background-size: cover;position:absolute;background-position: 0vw;background-repeat: no-repeat;background-position-y: bottom;",
            "animation": {
              "startAt": 0,
              "from": {},
              "to": {
                "scale": 2,
              }
            }
          },
        ]
      }
    },
    {
      "styles": "background: linear-gradient(rgba(43, 72, 117, 0.976), rgb(180, 163, 152), rgba(12, 12, 108, 0.976));",
      "layers": {
        "sceneInfo": [
          {
            "position": "top-left",
            "content":  "Firewatch scene info",
            "animation": {
              "startAt": 0,
              "from": {
                "opacity": 0
              },
              "to": {
                "opacity": 1,
              }
            }
          },
        ],
        "sceneAssets": [
          {
            "isTransparent": true,
            "styles": "background: linear-gradient(rgba(43, 72, 117, 0.976), rgb(102, 69, 49), rgba(12, 12, 108, 0.976));width: 100%;height:100%",
            "animation": {
              "startAt": 0,
              "from": {},
              "to": {
                "background": "linear-gradient(rgba(43, 72, 117, 0.976), rgb(89, 49, 102), rgba(12, 12, 108, 0.976))",
              },
            },
          },
          {
            "src": "assets/scene_2/moon.png",
            "styles": "bottom: 50vh;left: 50%",
            "animation": {
              "startAt": 0,
              "from": {},
              "to": {
                "y": "+=50",
              },
            }
          },
          {
            "src": "assets/scene_2/layer_0.png",
            "styles": "width: 100%;bottom:20%",
            "animation": {
              "startAt": 0,
              "from": {},
              "to": {
                "y": -10,
              },
            },
          },
          {
            "src": "assets/scene_2/layer_1.png",
            "styles": "width: 100%;bottom:20%",
            "animation": {
              "startAt": 0,
              "from": {},
              "to": {
                "y": -30,
              },
            },
          },
          {
            "src": "assets/scene_2/layer_2.png",
            "styles": "width: 100%;bottom:20%",
            "animation": {
              "startAt": 0,
              "from": {},
              "to": {
                "y": -50,
              },
            },
          },
          {
            "src": "assets/scene_2/layer_3.png",
            "styles": "width: 100%;bottom:20%",
            "animation": {
              "startAt": 0,
              "from": {},
              "to": {
                "y": -70,
              },
            },
          },
          {
            "src": "assets/scene_2/layer_4.png",
            "styles": "width: 100%;bottom:20%",
            "animation": {
              "startAt": 0,
              "from": {},
              "to": {
                "y": -100,
              },
            },
          },
          {
            "src": "assets/scene_2/layer_5.png",
            "styles": "width: 100%;bottom:20%",
            "animation": {
              "startAt": 0,
              "from": {},
              "to": {
                "y": -120,
              },
            },
          },
          {
            "src": "assets/scene_2/layer_6.png",
            "styles": "width: 100%;bottom:20%",
            "animation": {
              "startAt": 0,
              "from": {},
              "to": {
                "y": -200,
              },
            },
          },
          {
            "styles": "height:21%; width:100%;background: #2d112b;bottom:0",
            "isTransparent": true,
            "animation": {
              "startAt": 0,
              "from": {},
              "to": {
                "height": "+=200",
              },
            },
          }
        ]
      },
    },
  ]
}
