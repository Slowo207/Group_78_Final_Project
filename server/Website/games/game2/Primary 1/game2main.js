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
var toggle_bgm = true;

// buttons dimension
var answer_button_width;
var answer_button_height;

//number of questions
var number_of_questions = 5;

// bgm
var bgm;

function preload()
{
    soundFormats('mp3');

    bgm = loadSound("sounds/Summer - Bensound - Royalty Free Music - No Copyright Music.mp3");
    bgm.setVolume(0.2);
}

function setup()
{
	createCanvas(800, 800);

    questions_set = new Game2QuestionAnswerGenerator();

    answer_button_width = width/2;
    answer_button_height = height/10;

    homepage = loadImage("assets/game2_homepage.png");

    // Start Button
    game_start_button = createImg('assets/start-button.png');  
    game_start_button.position(width/4+20, height/4+20);
    game_start_button.mouseClicked(function(){game_start = true;});

    //Options Button
    // Option 1
    option1 = createButton("A) ");
    option1.position(0, answer_button_height*8);
    option1.size(answer_button_width, answer_button_height);
    option1.style("font-size", '30px');
    option1.mouseClicked(function(){questions_set.checkAnswer(game_stage, option1.value(), option1)});

    // Option 2
    option2 = createButton("B) ");
    option2.position(answer_button_width, answer_button_height*8);
    option2.size(answer_button_width, answer_button_height);
    option2.style("font-size", '30px');
    option2.mouseClicked(function(){questions_set.checkAnswer(game_stage, option2.value(), option2)});

    // Option 3
    option3 = createButton("C) ");
    option3.position(0, answer_button_height*9);
    option3.size(answer_button_width, answer_button_height);
    option3.style("font-size", '30px');
    option3.mouseClicked(function(){questions_set.checkAnswer(game_stage, option3.value(), option3)});

    // Option 4
    option4 = createButton("D) ");
    option4.position(answer_button_width, answer_button_height*9);
    option4.size(answer_button_width, answer_button_height);
    option4.style("font-size", '30px');
    option4.mouseClicked(function(){questions_set.checkAnswer(game_stage, option4.value(), option4)});

    // Restart Game Button
    restart_button = createButton("Restart");
    restart_button.position(width/2 - 105, 2*height/3);
    restart_button.size(210,76);
    restart_button.mouseClicked(restart_game);
}

function draw()
{
    // default background
    image(homepage, 0, 0);

    if(game_start)
    {
        game_start_button.hide();

        if(toggle_bgm)
        {
            startBGM();
        }

        option1.show();
        option2.show();
        option3.show();
        option4.show();

        if(game_stage < number_of_questions)
        {
            updateQuestionAndOptions(game_stage);
            if(questions_set.isWrong)
            {
                printRetry();
            }
        }
        else
        {
            option1.hide();
            option2.hide();
            option3.hide();
            option4.hide();
            restart_button.show();
            questions_set.displayEndGameMarks();
            endBGM();
        }
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
    }
}

// helper functions

function updateOptionButton(game_stage)
{
    // Answer Options

    // Option 1
    option1.html("A) " + questions_set.options[game_stage][0]);
    option1.value(questions_set.options[game_stage][0]);
    option1.style('background-color', '#dbf3ff');

    // Option 2
    option2.html("B) " + questions_set.options[game_stage][1]);
    option2.value(questions_set.options[game_stage][1]);
    option2.style('background-color', '#dbf3ff');

    // Option 3
    option3.html("C) " + questions_set.options[game_stage][2]);
    option3.value(questions_set.options[game_stage][2]);
    option3.style('background-color', '#dbf3ff');

    // Option 4
    option4.html("D) " + questions_set.options[game_stage][3]);
    option4.value(questions_set.options[game_stage][3]);
    option4.style('background-color', '#dbf3ff');
}

function updateQuestionAndOptions(game_stage)
{
    // Display Questions
    questions_set.displayQuestion(game_stage, width, height/5, width/2, height/2);
            
    if(toggle_options)
    {
        updateOptionButton(game_stage);
        toggle_options = !toggle_options;
    }
}

function printRetry()
{
    push();

    fill("#ff0032");
    stroke("#ff0032");
    textSize(30);
    textAlign(CENTER,CENTER);
    text("Incorrect, please try again!", width/2, height/4);
    pop();
}

function restart_game()
{
    game_start = 0;

    questions_set = new Game2QuestionAnswerGenerator();

    game_stage = 0;
}

function startBGM()
{
    bgm.play();
    bgm.loop();

    toggle_bgm = !toggle_bgm;
}

function endBGM()
{
    bgm.stop();
    toggle_bgm = !toggle_bgm;
}