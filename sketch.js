var oxygenHyhs1 , oxygenHyhs1Img;
var oxygenHyhs2 , oxygenHyhs2Img;
var oxygenHyhs3 , oxygenHyhs3Img;

function preload(){
  //loading images for oxygen
  
  oxygenHyhs1Img = loadImage("oxygenHyhs1.png");
  oxygenHyhs2Img = loadImage("oxygenHyhs2.png");
  oxygenHyhs3Img = loadImage("oxygenHyhs3.png");

}
function setup(){
createCanvas(3000,3000)
  // creating sprite image for oxygen available in chennai hospital no.1
oxygenHyhs1 = createSprite(600, 400,150,150);
oxygenHyhs1.addImage(oxygenHyhs1Img);

// creating sprite image for oxygen available in chennai hospital no.2
oxygenHyhs2 = createSprite(600, 1100,150,150);
oxygenHyhs2.addImage(oxygenHyhs2Img);


// creating sprite image for oxygen available in chennai hospital no.3
oxygenHyhs3 = createSprite(600, 1800,150,150);
oxygenHyhs3.addImage(oxygenHyhs3Img);

}

function draw(){
  background("green")
  drawSprites();
}