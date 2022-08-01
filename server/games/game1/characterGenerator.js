class CharacterGenerator
{
    constructor(char_filepath, fish_filepath,x_coord, y_coord)
    {
        this.character = loadImage(char_filepath);
        this.fish = loadImage(fish_filepath);
        this.x = x_coord;
        this.y = y_coord;
    }

    displayChar()
    {
        image(this.character, this.x, this.y);
    }

    displayFishing(rod_length, pos_of_rod)
    {
        if(pos_of_rod == "Player")
        {
            if(rod_length > 0)
            {
                push();
                stroke(255);
                pop();
                line(this.x + 52, this.y + 10, this.x + 52, this.y + 10 + rod_length);
                image(this.fish, this.x + 33, this.y + 10 + rod_length);
            }
            else
            {
                image(this.fish, this.x + 33, this.y + 10);
            }
        }
        if(pos_of_rod == "AI")
        {
            if(rod_length > 0)
            {
                push();
                stroke(255);
                pop();
                line(this.x + 9, this.y + 10, this.x + 9, this.y + 10 + rod_length);
                image(this.fish, this.x - 8, this.y + 10 + ai_rod_line_length);
            }
            else
            {
                image(this.fish, this.x - 8, this.y + 10);
            }
        }
        
    }
}