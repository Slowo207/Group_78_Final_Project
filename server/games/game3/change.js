class Change{
    constructor(x, y, width, height, cost, amount, asset, assetwidth, assetHeight, type){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.cost = cost
        this.amount = amount
        this.asset = loadImage("assets/" + asset)
        this.assetwidth = assetwidth
        this.assetHeight = assetHeight
        this.type = type
    }

    draw(){
        // textSize(28)
        // fill("black")
        // text(this.amount, this.x, this.y + 30)
        if(this.type == "Note"){
            if(this.amount < 5){
                // textSize(28)
                // fill("black")
                // text(this.amount, this.x, this.y + 30)
                for(let j=0; j < this.amount; j++){
                    image(this.asset, 5 + this.x + 7*j, 5 + this.y, this.assetwidth, this.assetHeight)
                    noFill()
                    rect(5 + this.x + 7*j, 5 + this.y, this.assetwidth, this.assetHeight)
                }
            }else{
                for(let j=0; j < 4; j++){
                    image(this.asset, 5 + this.x + 7*j, 5 + this.y, this.assetwidth, this.assetHeight)
                    noFill()
                    rect(5 + this.x + 7*j, 5 + this.y, this.assetwidth, this.assetHeight)
                }
            }
        }else if(this.type == "Coin"){
            if(this.amount < 5){
                for(let j=0; j < this.amount; j++){
                    image(this.asset, 5 + this.x, 5 + this.y + 7 * j, this.assetwidth, this.assetHeight)
                    noFill()
                    ellipse(15 + this.x, 15 + this.y + 7 * j, this.assetwidth, this.assetHeight) 
                }
            }else{
                for(let j=0; j < 4; j++){
                    image(this.asset, 5 + this.x, 5 + this.y + 7 * j, this.assetwidth, this.assetHeight)
                    noFill()
                    ellipse(15 + this.x, 15 + this.y + 7 * j, this.assetwidth, this.assetHeight) 
                }
            }
        }
        

        noFill()
        rect(this.x, this.y, this.width, this.height)
    }

    clicked(){
        if((mouseX > this.x && mouseX < this.x+this.width) && (mouseY > this.y && mouseY < this.y + this.height)){
            if(this.amount >0){
                console.log(this.cost)
                this.amount -= 1
                return this.cost
            }else{
                return 0
            }
          }
          else{
            return 0
          }
    }
}