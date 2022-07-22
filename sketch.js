var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i, iI;



function preload(){
  
    boyImg = loadAnimation ("jake1.png","jake2.png","jake3.png", "jake4.PNG", "jake5.png");
  pathImg = loadImage ("path.png");
}
function setup() {
  createCanvas(400,400);
 path = createSprite (200,200,10,100);
path.addImage (pathImg);
//a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

boy = createSprite (200,200,20,20)
boy.addAnimation ("boy", boyImg);
boy.scale= 0.4;
 
//crie um limite à esquerda
leftBoundary=createSprite (20,1,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false ;
//crie um limite à direita
rightBoundary=createSprite(380,1,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false ;
}
function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
 
  if (keyDown("a")) {
    boy.x = boy.x -4;
  }
  if (keyDown("d")) {
    boy.x = boy.x +4;
  }
  boy.collide (rightBoundary);
  boy.collide (leftBoundary);
  //código para redefinir o fundo
  

  if(path.y > 500 ){
    path.y = height/2;
  }
  
  drawSprites();
}
