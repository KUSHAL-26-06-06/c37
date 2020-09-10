//Create variables here
var dog,happydog;
var database;
var foodS,foodstockS;
var foodObj;
function preload()
{
  //load images here
  dogImage=loadImage("dogImg.png");
  dogImage1=loadImage("dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  
  dog=createSprite(250,200);
  dog.addImage(dogImage);
  foodstock=database.ref('Food');
  foodstock.on("value",readStock);

  feed=createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoodS);

}


function draw() {  
  BackGround(46,139,87);

  
    
  drawSprites();
  
}

function readStock(data){
  foodS=data.val();

}
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getfoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour
  })
}
function AddFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}




