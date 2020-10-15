class Drop{
    constructor(x, y){
        var options = { 
            'restitution':0.5,
            'friction':0.01,
            'timeScale':0.5
          }
          this.rain = Bodies.circle(x, y, 5, options);
          this.radius = 5;
          World.add(world, this.rain);
    }
   
    updateY(){
      if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain,{x:random(0, 600), y:0});
      }
    }
  
    display(){
      strokeWeight(1);
      stroke(random(0,100)/* 'darkblue' */);
      fill("blue");
      ellipseMode(CENTER);
      ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius)
    }
  
  
  }