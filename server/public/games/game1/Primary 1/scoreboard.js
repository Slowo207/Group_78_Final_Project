class Scoreboard
{
    constructor(amount_of_questions)
    {
        // score of the questions
        this.score = [];
        this.amt_of_questions = amount_of_questions;
        this.remaining_questions = amount_of_questions;
        this.#generateDefaultScore(amount_of_questions);
        this.notice_background = loadImage('games/game1/assets/wooden noticeboard.png');
    }

    #generateDefaultScore(amount_of_questions)
    {
        for(let i = 0; i < amount_of_questions; ++i)
        {
            this.score.push("-");
        }
    }

    displayScoreboard()
    {
        push();

        image(this.notice_background, width/2 - this.notice_background.width/2, height/5);

        stroke(0);
        textAlign(CENTER,CENTER);
        textSize(20);
        text("Questions remaining:", width/2+2, height/4 + 25);
        textSize(50);
        text(this.remaining_questions + "/" + this.amt_of_questions, width/2, height/3 - 7);
        pop();
    }
}