//boxes
AFRAME.registerComponent("bowling-pins", {
    schema: {
      height: { type: "number", default: 2 },
      width: { type: "number", default: 2 },
      depth: { type: "number", default: 2 },
    },
    init: function () {
  
        var pin = document.createElement("a-entity");
        pin1.position="-2 1.5 -10"
        pin2.position="0 1.5 -10"
        pin3.position="2 1.5 -10"
        pin4.position="-1 2.5 -10" 
        pin5.position="1 2.5 -10"
       pin6.position="0 3.5 -10"

        pin.setAttribute("id", "pin");      
        pin.setAttribute("position", position);
  
        pin.setAttribute("geometry", {
          primitive: "pin",
          height: this.data.height,
          width: this.data.width,
          depth: this.data.depth,
        });
  
        pin.setAttribute("material", {
          src: "C:/Users/vikas/Downloads/161 project/PRO-C161-Student-Activity-main/models/bowling_pin/scene.gltf",
          repeat: "1 1 1",
        });
  
        pin.setAttribute("static-body", {});
  
        var sceneEl = document.querySelector("#scene");
        sceneEl.appendChild(pin);
      }
    },
  );