class Scoreboard
{
    constructor(amount_of_questions)
    {
        // score of the questions
        this.score = [];
        this.remaining_questions = amount_of_questions;
        this.#generateDefaultScore(amount_of_questions);
        this.notice_background = loadImage('assets/wooden noticeboard.png');
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

        image(this.notice_background, width/3-25, height/8);

        stroke(0);
        textAlign(CENTER,CENTER);
        textSize(25);
        text("Questions remaining:", width/2+2, height/3+10);
        textSize(50);
        text(this.remaining_questions + "/5", width/2, height/3 + 60);
        pop();
    }
}