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
      "layers": {
        "sceneInfo": [
          {
            "position": "top-left",
            "content":  "Transitions between multiple layered assets",
            "animation": {
              "startAt": 1,
              "from": {
                "opacity": 0
              },
              "to": {
                "opacity": 1,
              }
            }
          },
          {
            "position": "bottom-right",
            "content":  "Each image with their own styles",
            "animation": {
              "startAt": 3.5,
              "from": {
                "opacity": 0
              },
              "to": {
                "opacity": 1,
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
              }
            }
          }
        ]
      }
    },
    {
      "styles": "background-color: #FEDCC8;",
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
            "styles": "background-color: #FEDCC8;width: 100%;height:100%",
            "animation": {
              "startAt": 0,
              "from": {},
              "to": {
                "background": "linear-gradient(rgb(85, 45, 100), rgb(44, 74, 120), rgb(12, 12, 110))",
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
                "y": "-=50",
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
            "styles": "width: 100%;bottom:300px",
            "animation": {
              "startAt": 0,
              "from": {},
              "to": {
                "y": -200,
              },
            },
          },
          {
            "styles": "height:310px; width:100%;background: #2d112b;bottom:0",
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
      }
    },
  ]
}
