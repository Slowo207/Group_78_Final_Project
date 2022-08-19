class Game2QuestionAnswerGenerator
{

    constructor()
    {
        this.rect_fish_1 = new fishes("games/game2/Primary 3/assets/2D/Rectangle/Rectangle_Fish.png", 'Rectangle');
        this.rect_fish_2 = new fishes("games/game2/Primary 3/assets/2D/Rectangle/Rectangle_Fish.png", 'Rectangle');
        this.rect_fish_3 = new fishes("games/game2/Primary 3/assets/2D/Rectangle/Rectangle_Fish.png", 'Rectangle');
        this.square_fish_1 = new fishes("games/game2/Primary 3/assets/2D/Square/Square_Anglerfish.png", 'Square');
        this.square_fish_2 = new fishes("games/game2/Primary 3/assets/2D/Square/Square_Anglerfish.png", 'Square');
        this.square_fish_3 = new fishes("games/game2/Primary 3/assets/2D/Square/Square_Anglerfish.png", 'Square');

        // this.shape_array = ["Cone", "Cube", "Cuboid", "Cylinder", "Sphere"];
        this.question_type = ['perimeter', 'area'];

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
            
            correct_answer_sound.stop();
            correct_answer_sound.play();
            
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
        rect(width/3 - 50, height/5, 360, 2*height/5+52);

        // heading
        fill(0);
        textAlign(CENTER,CENTER);
        textSize(30);
        text("Total attempts needed \n to complete the game: ", width/2, height/3);

        // Score
        fill("#6effa9");
        textSize(50);
        text(this.attempts, width/2, height/3 + 125);

        pop();
     }

    #generateQuestions()
    {
        for(let i = 0; i < 5; ++i)
        {
            let randomIndex = round(random(0, this.fish_array.length-1));
            let tempElement = this.fish_array[randomIndex];

            let type = random(this.question_type);
            this.questions.push("What is the " + type + " of this?" + '\n Length = ' + tempElement.length + ', Width/Breadth = ' + tempElement.width);
            
            this.fish_array.splice(randomIndex,1);
            this.questions_shape.push(tempElement);

            if(type == "perimeter")
            {
                this.answers.push(tempElement.perimeter);
            }
            else
            {
                this.answers.push(tempElement.area);
            }
            
        }
    }

    #generateOptions()
    {
        for(let i = 0; i < 5; ++i)
        {
            let option_set = new Set([this.answers[i]]);

            // Populate the set with random options without duplicates
            for(let j = 0; j < 3; ++j)
            {
                let randomize_option = floor(random(0, 1000));
                // Check for duplicates
                while(option_set.has(randomize_option))
                {
                    int1 = floor(random(0, 1000));
                }
                option_set.add(randomize_option);
            }

            // Converting the set to an array
            let temp_arr = Array.from(option_set);

            this.#shuffle_array(temp_arr);

            this.options.push(temp_arr);
        }
    }

     // private helper functions

     #add_fishes()
     {
        this.fish_array.push(this.rect_fish_1);
        this.fish_array.push(this.rect_fish_2);
        this.fish_array.push(this.square_fish_1);
        this.fish_array.push(this.square_fish_2);
        this.fish_array.push(this.rect_fish_3);
        this.fish_array.push(this.square_fish_3);
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