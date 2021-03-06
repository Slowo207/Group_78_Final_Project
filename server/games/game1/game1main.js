// game state
var game_start = false;

// an object set to contain the questions
var questions_set = null;

// stages for game
var game_stage = 0;

// answer options
var option1, option2, option3, option4;

// a boolean to toggle options
var toggle_options = true;

// buttons dimension
var answer_button_width;
var answer_button_height;

//fishing rod line length;
var player_rod_line_length = 200;
var ai_rod_line_length = 200;

//fishing rod speed change 
var ai_rod_line_speed = 0.1;

//number of questions
var number_of_questions = 5;

function setup()
{
	createCanvas(800, 800);

    questions_set = new QuestionAnswerGenerator(number_of_questions, 100);
    scoreboard = new Scoreboard(number_of_questions);

    answer_button_width = width/2;
    answer_button_height = height/10;
    
    player = new CharacterGenerator("assets/player1.png", "assets/player_fish.png",100, 2*height/5-40);
    ai_character = new CharacterGenerator("assets/ai_char.png", "assets/ai_fish.png",width-150, 2*height/5-40);

    scenery = new SceneryGenerator(0, height/5, width, 3*height/5);

     // Start Button
     game_start_button = createButton('Start');  
     game_start_button.position(width/2 - 75, height/2 - 38);
     game_start_button.size(150,76);
     game_start_button.mouseClicked(function(){game_start = true;});

     //Options Button
     // Option 1
     option1 = createButton("A) ");
     option1.position(0, answer_button_height*8);
     option1.size(answer_button_width, answer_button_height);
     option1.mouseClicked(function(){questions_set.checkAnswer(game_stage, option1.value(),scoreboard.score)});

     // Option 2
     option2 = createButton("B) ");
     option2.position(answer_button_width, answer_button_height*8);
     option2.size(answer_button_width, answer_button_height);
     option2.mouseClicked(function(){questions_set.checkAnswer(game_stage, option2.value(),scoreboard.score)});

     // Option 3
     option3 = createButton("C) ");
     option3.position(0, answer_button_height*9);
     option3.size(answer_button_width, answer_button_height);
     option3.mouseClicked(function(){questions_set.checkAnswer(game_stage, option3.value(),scoreboard.score)});

     // Option 4
     option4 = createButton("D) ");
     option4.position(answer_button_width, answer_button_height*9);
     option4.size(answer_button_width, answer_button_height);
     option4.mouseClicked(function(){questions_set.checkAnswer(game_stage, option4.value(),scoreboard.score)});

    // Restart Game Button
    restart_button = createButton("Play again!");
    restart_button.position(width/2 - 105, 2*height/3);
    restart_button.size(190,76);
    restart_button.mouseClicked(restart_game);
}

function draw()
{
    if(game_start)
    {
        
        game_start_button.hide();

        //game scenery
        scenery.displayScenery();

        //game characters
        player.displayChar();
        ai_character.displayChar();

        //fishing mode
        player.displayFishing(player_rod_line_length, "Player");
        ai_character.displayFishing(ai_rod_line_length, "AI");

        //display scoreboard
        scoreboard.displayScoreboard();

        option1.show();
        option2.show();
        option3.show();
        option4.show();

        if(game_stage == 0)
        {
            updateQuestionAndOptions(game_stage);
        }
        else if(game_stage == 1)
        {
            updateQuestionAndOptions(game_stage);
        }
        else if(game_stage == 2)
        {
            updateQuestionAndOptions(game_stage);
        }
        else if(game_stage == 3)
        {
            updateQuestionAndOptions(game_stage)
        }
        else if(game_stage == 4)
        {
            updateQuestionAndOptions(game_stage);
        }
        else
        {
            ai_rod_line_speed = 0;
            restart_button.show();
            questions_set.displayEndGameMarks();
        }

        ai_rod_line_length -= ai_rod_line_speed;

    }
    else 
    {
        // hides the buttons until the game starts
        option1.hide();
        option2.hide();
        option3.hide();
        option4.hide();
        restart_button.hide();

        game_start_button.show();

        // default background
        background("#b7e8ff");

        //background placeholder, can remove later
        stroke(0);
        textAlign(CENTER,CENTER);
        textSize(35);
        text("Background picture here", width/2, height/4);
    }
}

function updateOptionButton(game_stage)
{
    // Answer Options

    // Option 1
    option1.html("A) " + questions_set.answers_options[game_stage][0]);
    option1.value(questions_set.answers_options[game_stage][0]);

    // Option 2
    option2.html("B) " + questions_set.answers_options[game_stage][1]);
    option2.value(questions_set.answers_options[game_stage][1]);

    // Option 3
    option3.html("C) " + questions_set.answers_options[game_stage][2]);
    option3.value(questions_set.answers_options[game_stage][2]);

    // Option 4
    option4.html("D) " + questions_set.answers_options[game_stage][3]);
    option4.value(questions_set.answers_options[game_stage][3]);
}

function updateQuestionAndOptions(game_stage)
{
    // Display Questions
    questions_set.displayQuestion(game_stage, width, height/5);
            
    if(toggle_options)
    {
        updateOptionButton(game_stage);
        toggle_options = !toggle_options;
    }
}

function restart_game()
{
    game_start = 0;
    
    //fishing rod line length;
    player_rod_line_length = 200;
    ai_rod_line_length = 200;

    questions_set = new QuestionAnswerGenerator(number_of_questions, 100);
    scoreboard = new Scoreboard(number_of_questions);

    game_stage = 0;

    ai_rod_line_speed = 0.05;
}