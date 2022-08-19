var bgm

var fishInLevel = 5

var registerArray = []
var changeArray = []

function preload() {
  soundFormats('mp3');

  bgm = loadSound("games/game3/assets/sounds/game3_Music.mp3");
  bgm.setVolume(0.2);

  sassoon = loadFont("fonts/Sassoon-Primary.otf");
}

function setup() {
  //create a canvas to fill the content div from index.html
  canvasContainer = select('#game3p1');
  var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
  c.parent("game3p1");

  //createCanvas(800, 800);

  textFont(sassoon);

  registerArray = []
  changeArray = []
  clientAssetArray = ["Boy.png", "Girl.png", "Grandma.png"]
  fishAssetArray = ["Fish_blue.png", "Fish_green.png", "Fish_orange.png", "Fish_purple.png", "Fish_yellow.png"]
  levelArray = [
    //[MinPrice, MaxPrice, Increments, removeDecimal, HideCost, HideBills, HideCoins]
    [
      [0.1, 1, 0.1, false, false, true, false],
      [0.1, 1, 0.05, false, false, true, false],
      [1, 100, 10, true, false, false, true],
      [1, 100, 5, true, false, false, true],
      [1, 100, 1, true, false, false, true]
    ],
    [
      [0.1, 1, 0.1, false, false, true, false],
      [0.1, 1, 0.05, false, false, true, false],
      [1, 100, 10, true, false, false, true], 
      [1, 100, 5, true, false, false, true],
      [1, 100, 1, true, false, false, true]
    ],
    [
      [0.1, 100, 0.1, false, false, false, false],
      [0.1, 100, 0.05, false, false, false, false],
      [1, 100, 10, false, false, false, false],
      [1, 100, 5, false, false, false, false],
      [1, 100, 0.05, false, false, false, false]
    ]
  ]
  PrimaryTextArray = [["I will need ", "in change"], ["How much change should I get back?"], ["How much change should I get back?"]]

  resetGame()

  //loading assets
  registerAsset = loadImage('games/game3/assets/Register.png')

  priceTag = loadImage('games/game3/assets/PriceTag.png')

  paidNote = loadImage('games/game3/assets/NotePaid.png')

  //loading register box
  //(id, x, y, width, height, cost, asset, assetHeight, offset, scale, textOffsetX, textOffsetY)
  registerArray.push(new Register(0, 104+75*0, 404, 71, 195, 20, "Note50.png", 195, 0, 0, 20, 105))
  registerArray.push(new Register(1, 103+75*1, 404, 71, 195, 10, "Note20.png", 195, 0, 0, 20, 105))
  registerArray.push(new Register(2, 102+75*2, 404, 71, 195, 5, "Note10.png", 195, 0, 0, 20, 105))
  registerArray.push(new Register(3, 100+75*3, 404, 71, 195, 1, "Note5.png", 195, 0, 0, 20, 105)), 
  
  registerArray.push(new Register(4, 104+75*0, 600, 75, 100, 0.50, "GoldCoin.png", 75, 10, 10, 20, 52))
  registerArray.push(new Register(5, 100+75*1, 600, 75, 100, 0.2, "SilverCoin.png", 75, 10, 10, 20, 52))
  registerArray.push(new Register(6, 100+75*2, 600, 75, 100, 0.10, "BrassCoin.png", 75, 10, 10, 20, 52))
  registerArray.push(new Register(7, 100+75*3, 600, 75, 100, 0.05, "BrassCoin.png", 75, 10, 10, 20, 52))

  //console.log("loaded register")
  
  //loading Change box
  //(x, y, width, height, cost, amount, asset, type)
  changeArray.push(new Change(120 +65*0, 180, 65, 90, 20, 0, "Note50.png", 30, 45, "Note"))
  changeArray.push(new Change(120 +65*1, 180, 65, 90, 10, 0, "Note20.png", 30, 45, "Note"))
  changeArray.push(new Change(120 +65*2, 180, 65, 90, 5, 0, "Note10.png", 30, 45, "Note"))
  changeArray.push(new Change(120 +65*3, 180, 65, 90, 1, 0, "Note5.png", 30, 45, "Note"))

  changeArray.push(new Change(120 +65*0, 270, 65, 60, 0.50, 0, "GoldCoin.png", 20, 20, "Coin"))
  changeArray.push(new Change(120 +65*1, 270, 65, 60, 0.20, 0, "SilverCoin.png", 20, 20, "Coin"))
  changeArray.push(new Change(120 +65*2, 270, 65, 60, 0.10, 0, "BrassCoin.png", 20, 20, "Coin"))
  changeArray.push(new Change(120 +65*3, 270, 65, 60, 0.05, 0, "CentExtra.png", 20, 20, "Coin"))

  //console.log("loaded change")
  
  //loading background image
  backgoundImage = loadImage('games/game3/assets/image0.jpg')

  //loading score images
  correctImg = loadImage('games/game3/assets/HappyFace.png')
  wrongImg = loadImage('games/game3/assets/SadFace.png')

  textAlign(CENTER)
  correctImg = loadImage('games/game3/assets/HappyFace.png')
  wrongImg = loadImage('games/game3/assets/SadFace2.png')
}

function resetGame(){
  fishArray = []
  scoreArray = []
  fish = 0
  cost = 0
  change = 0 
  gameState = 0
  score = 0
  var level = Number(localStorage.getItem('level'));
  var primary = Number(localStorage.getItem('grade')) - 1;

  console.log("Primary: " + (primary + 1) + ", level: " + (level + 1))

  costHide = levelArray[primary][level][4]
  paidHide = levelArray[primary][level][5]

  //registerArray.push()
  fishPrice(levelArray[primary][level])
}

function draw() {
  background(220);
  
  if(gameState == 0){
    startPage()
  }else if (gameState == 1){
    gamePage()
  }else if (gameState == 2){
    endPage()
  }
}

function fishPrice(priceArray){
  startPrice = priceArray[0]
  endPrice = priceArray[1]
  increment = priceArray[2]
  rD = priceArray[3]
  
  for(i=0; i < fishInLevel; i++){
    cost = getRndInteger(startPrice, endPrice, rD)
                         //(cost, paid,                               customerAsset,                             fishAsset                              )
    fishArray.push(new Fish(cost, findPaid(cost,endPrice, increment), clientAssetArray[getRndInteger(0,3,true)], fishAssetArray[getRndInteger(0,5,true)]))
  }  
}

function startPage(){
  image(backgoundImage, 0, 0, 800, 800)
  textSize(32)
  fill("black")
  text("Start", 400, 350)
  noFill()
  rect(300, 300, 200, 100)
}

function gamePage(){
  image(backgoundImage, 0, 0, 800, 800)

  image(registerAsset, 100, 400, 300, 300)

  fill('#F8DECB')
  //fish box
  rect(400, 400, 300, 300)
  //cash box
  rect(100, 100, 300, 300)

  fill('#C8AE7E ')
  //Change Background
  rect(120, 120, 260, 210)

  noFill()
  //register box
  rect(100, 400, 300, 300)   

  //give change box
  rect(150, 350, 200, 30)

  textSize(26)
  fill("black")
  
  //Change Text
  text("Total Change:", 200, 160)
  if(costHide){
    push()
    fill("blue")
    rect(260, 120, 120, 30)
    pop()
  }else{
    push()
    textAlign(LEFT)
    text(change, 290, 162)
    pop()
  }
  //text("Fish", 400, 450)
  //text("Paid", 100, 100)

  textSize(32)
  
  //Score Text
  //text(score, 50, 50)

  //Score filler
  for(i=0; i< fishInLevel; i++){
    fill('rgba(0, 0, 0, .5)')
    ellipse(130 + 60 *i, 50, 50, 50)
  }

  //Score Images
  for(i=0; i < fish; i++){
    if(scoreArray[i] == 1){
      image(correctImg, 105 + 60*i, 25, 50, 50)
    }else {
      image(wrongImg, 105 + 60*i, 25, 50, 50)
    }
  }

  //Give Change Button
  fill("black")
  text("Give Change", 250, 375)
  
  //Draws register and change Box 
  for(i=0; i < registerArray.length; i++){
    registerArray[i].draw()
  }  

  for(i=0; i < changeArray.length; i++){
    changeArray[i].draw()
  }
  
  //Draws fish
  fishArray[fish].draw()

  //Customer paid Note
  fill('#C8AE7E ')
  rect(400,350, 300, 50)

  image(paidNote, 500, 353, 100, 44)

  textSize(32)
  fill("black")
  text(fishArray[fish].paid, 550, 385)
  
}

function endPage(){
  image(backgoundImage, 0, 0, 800, 800)
  textSize(32)
  fill("black")
  text("End", 400, 350)
  text(score, 370, 300)
  noFill()
  rect(300, 300, 200, 100)
}

function mouseClicked(){
  //Start Game Button
  if(gameState == 0){
    if((mouseX > 300 && mouseX < 500) && (mouseY > 300 && mouseY < 400)){
      startBGM()
      gameState = 1
    }
  }else if (gameState == 1){
    //Register logic
    if(mouseX < 400 && mouseY > 400 ){
      for(i=0; i < registerArray.length; i++){
        registerClick = registerArray[i].clicked()
        if(registerClick != false){
          change += registerClick[1]
          changeArray[registerClick[0]].amount += 1
        }
      }
    //Give Change logic
    }else if((mouseX < 350 && mouseX > 150)&&(mouseY < 380 && mouseY > 350)){
      if(change == fishArray[fish].change){
        score += 1
        scoreArray.push(1)
      }else{
        //console.log(fishArray[fish].change, change)
        scoreArray.push(0)
      }
      for(i=0; i<changeArray.length; i++){
        changeArray[i].amount = 0
      }
      //console.log(scoreArray)
      change = 0
      fish += 1
      if(fish > fishArray.length -1){
        gameState = 2
      }
    //Remove Change logic
    //120, 120, 260, 210
    }else if((mouseX > 120 && mouseX < 380) && (mouseY > 150 && mouseY < 330)){
      for(i=0; i < changeArray.length; i++){
        changeClicked = changeArray[i].clicked()
        change -= changeClicked
      }
    }
  }else if (gameState == 2){
    console.log("endGame1")
    if((mouseX > 300 && mouseX < 500) && (mouseY > 300 && mouseY < 400)){
      endBGM()
      console.log("end")
      gameState = 0
      resetGame()
    }
  }
}

//Math Logic Functions 
function getRndInteger(min, max, rD) {
  n = (Math.random() * (max - min)  + min)*100;
  n = Math.floor(n)/100
  if(rD == true){
    return Math.floor(n)
  }else if(rD == false){
    return n
  }
}

function removeDecimal(n){
  return Math.floor(n)
}

function findPaid(num, endPrice, increment) {
  m = endPrice - num
  mRemainder = Math.floor(m/increment)
  mRandom = getRndInteger(1, mRemainder, true)
  return Math.round((num + increment*mRandom) * 100) / 100
}

// //Sound Functions
function startBGM()
{
    bgm.play();
    bgm.loop();
}

function endBGM()
{
    bgm.stop();
}