class QuestionAnswerGenerator
{

    constructor(amount_of_questions, range_of_numbers)
    {
        // an array to contain the questions
        this.questions = [];
        this.answers_options = [];
        this.answers = [];
        this.attempts = 0;
        this.isWrong = false;
        this.#generateQuestions(amount_of_questions, range_of_numbers);
        this.#generateAnswers(amount_of_questions, range_of_numbers);
    }

    char_to_operator = 
    {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y }
    };

     // a private method to populate the array with 5 questions.
    #generateQuestions(amount_of_questions, range_of_numbers)
     {
         for(let i = 0; i < amount_of_questions; ++i)
            {
                let int1 = floor(random(1, floor(range_of_numbers/2)+1));
                let int2 = floor(random(int1));
                let operatorsArray = ['+', '-'];
                let operator = random(operatorsArray);
                this.questions.push("What is " + int1 + " " + operator + " " + int2 + "?");
                this.answers.push(this.char_to_operator[operator](int1,int2));
            }
     }

     #generateAnswers(amount_of_questions, range_of_numbers)
     {
        for(let i = 0; i < amount_of_questions; ++i )
        {
            // Insert the correct answer into the set
            let answer_set = new Set([this.answers[i]]);

            // Populate the set with random options without duplicates
            for(let j = 0; j < 3; ++j)
            {
                let int1 = floor(random(0, range_of_numbers));
                // Check for duplicates
                while(answer_set.has(int1))
                {
                    int1 = floor(random(0, range_of_numbers));
                }
                answer_set.add(int1);
            }

            // Converting the set to an array
            let temp_arr = Array.from(answer_set);

            //shuffle the answers
            this.#shuffle_array(temp_arr);

            this.answers_options.push(temp_arr);
        }
     }

     displayQuestion(question_number, text_width, text_height)
     {
        // Questionaire box
        push();
        stroke(125);
        strokeWeight(5);
        fill(0);
        rect(0, 0, text_width, text_height);
        // Questions
        fill(255);
        stroke(255);
        strokeWeight(1);
        textSize(40);
        textAlign(CENTER,CENTER);
        // textFont();
        text(this.questions[question_number], text_width/2, text_height/2);
        pop();
     }

     checkAnswer(question_number ,chosen_answer, scoreboard, option_button, game_ended)
     {
        if(this.answers[question_number] == chosen_answer)
        {
            game_stage++;
            scoreboard.score[question_number] = "Correct";
            scoreboard.remaining_questions--;
            toggle_options = !toggle_options;
            player_rod_line_length = player_rod_line_length - 40;
            this.marks++;
            this.isWrong = false;
            if(!gameEnded)
            {
                this.attempts++;
            }
        }
        else
        {
            option_button.style('background-color', '#F85C70');
            this.isWrong = true;
            if(!gameEnded)
            {
                this.attempts++;
            }
        }
     }

     displayEndGameMarks(time)
     {
        push();

        // Scoreboard background
        fill("#4d92b2");
        rect(width/2 - 105, height/5, 210, 2*height/5+52);

        // heading
        fill(0);
        textAlign(CENTER,CENTER);
        textSize(35);
        text("Attempts: ", width/2, height/5 + 50);
        text("Time: ", width/2, 2.5*height/5);

        // Score
        fill("#6effa9");
        textSize(50);
        text(this.attempts, width/2, 2*height/5);
        text(time.toFixed(1) + "s", width/2, 3*height/5);

        pop();
     }

     // private helper functions

     #shuffle_array(array_to_shuffle)
     {
        let randomized_index = 0;
        let temp_element = 0;
        let size = array_to_shuffle.length;

        for(let i = size - 1; i > 0; i--)
        {
            randomized_index = floor(random(i+1));
            temp_element = array_to_shuffle[i];
            array_to_shuffle[i] = array_to_shuffle[randomized_index];
            array_to_shuffle[randomized_index] = temp_element;
        }
     }
};