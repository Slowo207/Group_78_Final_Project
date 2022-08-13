class Game2QuestionAnswerGenerator
{

    constructor()
    {
        this.c_fish_1 = new fishes("assets/2D/Circle/Circle_Fish.png", 'Circle');
        this.c_fish_2 = new fishes("assets/2D/Circle/Circle_Fish2.png", 'Circle');
        this.c_fish_3 = new fishes("assets/2D/Circle/Circle_Frog.png", 'Circle');
        this.c_fish_4 = new fishes("assets/2D/Circle/Circle_Turtle.png", 'Circle');
        this.r_fish_1 = new fishes("assets/2D/Rectangle/Rectangle_Fish.png", 'Rectangle');
        this.s_fish_1 = new fishes("assets/2D/Square/Square_Anglerfish.png", 'Square');
        this.t_fish_1 = new fishes("assets/2D/Triangle/Triangle_Fish.png", 'Triangle');

        this.shape_array = ["Triangle", "Square", "Circle", "Rectangle"];

        this.fish_array = [];
        this.#add_fishes();

        this.questions = [];
        this.questions_shape = [];
        this.answers = [];
        this.options = [];

        this.attempts = 0;

        this.#generateQuestions();
        this.#generateOptions();

    }

    displayQuestion(question_number, text_width, text_height, image_width_pos, image_height_pos)
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

        image(this.questions_shape[question_number].shape_img, image_width_pos - this.questions_shape[question_number].shape_img.width/2, image_height_pos - this.questions_shape[question_number].shape_img.height/2);
        pop();
    }

    checkAnswer(question_number ,chosen_answer,option_button)
     {
        if(this.answers[question_number] == chosen_answer)
        {
            game_stage++;
            toggle_options = !toggle_options;
            this.attempts++;
            this.isWrong = false;
        }
        else
        {
            option_button.style('background-color', '#F85C70');
            this.isWrong = true;
            this.attempts++;
        }
     }

     displayEndGameMarks()
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

        // Score
        fill("#6effa9");
        textSize(50);
        text(this.attempts, width/2, 2*height/5);

        pop();
     }

    #generateQuestions()
    {
        for(let i = 0; i < 5; ++i)
        {
            this.questions.push("What is this shape?");

            let randomIndex = round(random(0, this.fish_array.length-1));
            let tempElement = this.fish_array[randomIndex];
            this.fish_array.splice(randomIndex,1);
            this.questions_shape.push(tempElement);
            this.answers.push(tempElement.shape);
        }
    }

    #generateOptions()
    {
        for(let i = 0; i < 5; ++i)
        {
            let option_set = [];
            option_set.push(this.answers[i]);

            for(let j = 0; j < 4; ++j)
            {
                if(option_set[0] == this.shape_array[j])
                {
                    continue;
                }
                else
                {
                    option_set.push(this.shape_array[j]);
                }
            }

            this.#shuffle_array(option_set);

            this.options.push(option_set);
        }
    }

     // private helper functions

     #add_fishes()
     {
        this.fish_array.push(this.c_fish_1);
        this.fish_array.push(this.c_fish_2);
        this.fish_array.push(this.c_fish_3);
        this.fish_array.push(this.c_fish_4);
        this.fish_array.push(this.r_fish_1);
        this.fish_array.push(this.s_fish_1);
        this.fish_array.push(this.t_fish_1);
     }

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