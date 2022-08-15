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
    this.change = paid - cost
    this.customerAsset = loadImage("games/game3/assets/" + customerAsset)
    this.fishAsset = loadImage("games/game3/assets/" + fishAsset)

  }
  
  draw(){
    //draws price
    image(priceTag, 510, 410, 50, 50)

    textSize(20)
    fill("black")
    text(this.cost, this.x+25, this.y- 115)
    
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

  getPaidArray(){
    console.log(this.cost)
    let ar = [50, 20, 10, 5, 1, 0.5, 0.2, 0.05]
    let m = this.paid
    let billsArr = []

    for(i=0; i < ar.length; i++){
      if(m > ar[i]){
        let remainder = m % ar[i]
        let count = m - remainder
        m = (m % ar[i])
      }
      if(m == 0){
        console.log("0")
        break
      }
    }
    return billsArr
  }
}