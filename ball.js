AFRAME.registerComponent("bowling-balls",{
    init:function(){
        this.showBall();
    },
    showBall:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key==="z"){
                var ball=document.createElement("a-entity");
                ball.setAttribute("geometry",{
                    primitive:"sphere",
                    radius:1
                })
                ball.setAttribute("material","color","black");
                var cam=document.querySelector("#camera");
                pos=cam.getAttribute("position");
                ball.setAttribute("position",{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })
                var camera=document.querySelector("#camera").object3D;
                var direction=new THREE.Vector3;
                camera.getWorldDirection(direction);
                ball.setAttribute("velocity",direction.multiplyScalar(-10));
                var scene=document.querySelector("#scene");
                scene.appendChild(ball)
            }
        })
    },
    removeBall: function (e) {
  
        //ball element
    var element=e.detail.target.el;
    
        //element which is hit
     var elementHit=e.detail.body.el;
    
        if (elementHit.id.includes("pin")) 
          {
  
              //impulse and point vector
              var impulse=new CANNON.Vec3(0,1,-15);
              var worldPoint=new CANNON.Vec3().copy(
                elementHit.getAttribute("position")
                );
              elementHit.body.applyImpulse(impulse,worldPoint);
      
              //remove event listener
              element.removeEventListener("collide",this.removeBall);
              
              //remove the bullets from the scene
              var scene=document.querySelector("#scene");
              scene.removeChild(element);
          }
        },
      });
      
      
      