var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg
var hada,hadaImg;
var fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//carga aquí la animación del hada
	hadaImg = loadImage("fairyImage2.png");
	fairyVoice = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice
	fairyVoice.loop();
	//crea el sprite del hada, y agrega la animación para el hada
	hada = createSprite(650,450);
	hada.addImage(hadaImg);
	hada.scale = 0.16;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
  background(bgImg);

  edges= createEdgeSprites();
  hada.collide(edges);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada
  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	if(keyDown("LEFT_ARROW")){
		hada.x = hada.x - 150;
		hada.velocityX = 0; 
	}
	
	else if(keyDown("RIGHT_ARROW")){
		hada.x = hada.x + 150;
		hada.velocityX = 0;
    }
	
}
