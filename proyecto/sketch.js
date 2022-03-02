// las variables con "I" significan image, "A" significa animation, "C" significa cortado 
var chile, chileI,chileA,chileC;
var knife,knifeI;
var olla, ollaI ;
var fire, fireI;
var time=360;
var gameOver;
var restart;
var invisibleGround;
var bgI;
var start =0 ;
var play = 1;
var end= 2;

// convertir las imagenes a png y cambiarle el nombre 
function preload() {
    bgI= loadImage("cocina.png") 
    chileI=loadImage("chile.png")
    chileA=loadAnimation("")
    chileC=loadAnimation("")
    knifeI=loadImage("knife.png")
    ollaI=loadImage("olla.png")
    fireI=loadImage("fire.png")
    gameOver= loadImage("")
    restart=loadImage("")


}
function setup() {
    createCanvas(windowWidth, 200);
    background("#c68767");
    chile = createSprite(50,180,20,50);
    chile.addImage("stop", chileI);


}


function draw(){

    background(255);
    // mostrar la posicion del canvas en plantalla, borrar del juego final  
    text(mouseX+","+mouseY,mouseX+10,mouseY);

    text("Time: "+ time, windowWidth-200,50);
    camera.position.x= chile.x +windowWidth/3 ;
    
    
    if (gameState===play){
      time = time - 1
      
      if(keyDown("d")){ 
        chile.velocityX = +2;
      }
      if(keyDown("a")){ 
        chile.velocityX = -2;
      }
      if(keyDown("w")){ 
        chile.velocityY = -2;
      }
     
    // gravedad
      chile.velocityY = chile.velocityY + 0.8
    
     
      chile.collide(invisibleGround);
    
    }
    else if (gameState === end) {
      gameOver.visible = true;
      restart.visible = true;
      
      
      //cambia la animación de Trex
      chile.changeAnimation("dead",chileC);
      
   
    }


    drawSprites()
}