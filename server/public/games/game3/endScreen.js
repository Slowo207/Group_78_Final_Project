class EndScreen{
    constructor(name){
        this.name = name
        this.x = 0
        this.y = 525
        this.width = 0
        this.height = 75
    }

    draw(){
        noFill()
        rect(this.x, this.y, this.width, this.height)
        fill('black')
        text(this.name, this.x + (this.width/2), this.y + (this.height/2))
    }

    func(){
        if(this.name == "Restart"){
            endBGM()
            console.log(this.name)
            gameState = 0
            resetGame()
        }else if(this.name == "Next"){
            endBGM()
            console.log(this.name)
            level += 1
            localStorage.setItem("g3p" + primary + "maxLevel", level)
            gameState = 0 
            resetGame()
        }else if(this.name == "Previous"){
            endBGM()
            console.log(this.name)
            level -= 1
            gameState = 0 
            resetGame()
        }
    }

    clicked(){
        if((mouseX > this.x && mouseX < this.x+this.width) && (mouseY > this.y && mouseY < this.y + this.height)){
          this.func()
        }
      }
}