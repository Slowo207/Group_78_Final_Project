class Fish{
  constructor(cost, paid, customerAsset, fishAsset){
    this.width = 75
    this.height = 200
    this.x = 500
    this.y = 550
    this.cost = cost
    this.paid = paid
    //console.log("hello")
    //this.paidArray = this.getPaidArray()
    this.change = Math.round((paid - cost) * 100) / 100
    console.log(this.change)
    this.customerAsset = loadImage("games/game3/assets/" + customerAsset)
    this.fishAsset = loadImage("games/game3/assets/" + fishAsset)
    this.change = paid - cost
    this.customerAsset = loadImage("games/game3/assets/" + customerAsset)
    this.fishAsset = loadImage("games/game3/assets/" + fishAsset)

  }
  
  draw(){
    //draws price
    image(priceTag, 510, 410, 70, 50)

    textSize(20)
    fill("black")
    text(this.cost, this.x+50, this.y- 115)
    
    //draws paid
    // textSize(32)
    // fill("black")
    // text(this.paid, 160, 145)

    //draws fish
    image(this.fishAsset, 425, 425, 100, 250)

    //draws custoemr
    image(this.customerAsset, 450, 100, 200, 300)

    //console.log(this.paidArray)
  }
}