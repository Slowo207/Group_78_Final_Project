// game state
var game_start = false;
var gameEnded = false;

// an object set to contain the questions
var questions_set = null;

// stages for game
var game_stage = 0;

// answer options
var option1, option2, option3, option4;

// a boolean to toggle options
var toggle_options = true;
var toggle_timer = true;
var toggle_bgm = true;

// buttons dimension
var answer_button_width;
var answer_button_height;

//fishing rod line length;
var player_rod_line_length = 200;
var ai_rod_line_length = 200;

//fishing rod speed change 
var ai_rod_line_speed = 0.05;

//number of questions
var number_of_questions = 5;

//timer
var timer = 0;
var completionTime = 0;

// bgm
var bgm;

function preload()
{
    soundFormats('mp3');

    bgm = loadSound("sound/Cuckoo Clock Quincas Moreira Background Music Children'sMusic.mp3");
    bgm.setVolume(0.2);
}

function setup()
{
	createCanvas(800, 800);

    questions_set = new QuestionAnswerGenerator(number_of_questions, 100);
    scoreboard = new Scoreboard(number_of_questions);

    answer_button_width = width/2;
    answer_button_height = height/10;
    
    player = new CharacterGenerator("assets/player1.png", "assets/player_fish.png",100, 2*height/5-40);
    ai_character = new CharacterGenerator("assets/ai_fisherman.png", "assets/ai_fish.png",width-150, 2*height/5-40);

    startpage_background = loadImage("assets/beach_mainpage.png");

    scenery = new SceneryGenerator(0, height/5, width, 4*height/5);

    // Start Button
    game_start_button = createImg('assets/start-button.png');  
    game_start_button.position(width/4+20, height/4+20);
    game_start_button.mouseClicked(function(){game_start = true;});

    //Options Button
    // Option 1
    option1 = createButton("A) ");
    option1.position(0, answer_button_height*8);
    option1.size(answer_button_width, answer_button_height);
    option1.style("font-size", '45px');
    option1.mouseClicked(function(){questions_set.checkAnswer(game_stage, option1.value(),scoreboard, option1, gameEnded)});

    // Option 2
    option2 = createButton("B) ");
    option2.position(answer_button_width, answer_button_height*8);
    option2.size(answer_button_width, answer_button_height);
    option2.style("font-size", '45px');
    option2.mouseClicked(function(){questions_set.checkAnswer(game_stage, option2.value(),scoreboard, option2, gameEnded)});

    // Option 3
    option3 = createButton("C) ");
    option3.position(0, answer_button_height*9);
    option3.size(answer_button_width, answer_button_height);
    option3.style("font-size", '45px');
    option3.mouseClicked(function(){questions_set.checkAnswer(game_stage, option3.value(),scoreboard, option3, gameEnded)});

    // Option 4
    option4 = createButton("D) ");
    option4.position(answer_button_width, answer_button_height*9);
    option4.size(answer_button_width, answer_button_height);
    option4.style("font-size", '45px');
    option4.mouseClicked(function(){questions_set.checkAnswer(game_stage, option4.value(),scoreboard, option4, gameEnded)});

    // Restart Game Button
    restart_button = createButton("Restart");
    restart_button.position(width/2 - 105, 2*height/3);
    restart_button.size(210,76);
    restart_button.mouseClicked(restart_game);

}

function draw()
{
    if(game_start)
    {
        game_start_button.hide();

        if(toggle_bgm)
        {
            startBGM();
        }

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

        if(game_stage < number_of_questions)
        {
            updateQuestionAndOptions(game_stage);
            gameTimer();
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
            gameEnded = true;
            ai_rod_line_speed = 0;
            restart_button.show();
            if(toggle_timer)
            {
                completionTime = timer;
                toggle_timer = !toggle_timer;
            }
            questions_set.displayEndGameMarks(completionTime);
            timer = 0;
            endBGM();
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
        image(startpage_background, 0, 0);
    }
}

// helper functions

function updateOptionButton(game_stage)
{
    // Answer Options
    // Option 1
    option1.html("A) " + questions_set.answers_options[game_stage][0]);
    option1.value(questions_set.answers_options[game_stage][0]);
    option1.style('background-color', '#dbf3ff');

    // Option 2
    option2.html("B) " + questions_set.answers_options[game_stage][1]);
    option2.value(questions_set.answers_options[game_stage][1]);
    option2.style('background-color', '#dbf3ff');

    // Option 3
    option3.html("C) " + questions_set.answers_options[game_stage][2]);
    option3.value(questions_set.answers_options[game_stage][2]);
    option3.style('background-color', '#dbf3ff');

    // Option 4
    option4.html("D) " + questions_set.answers_options[game_stage][3]);
    option4.value(questions_set.answers_options[game_stage][3]);
    option4.style('background-color', '#dbf3ff');

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
    
    toggle_timer = !toggle_timer;

    gameEnded = false;

    ai_rod_line_speed = 0.05;
}

function gameTimer()
{
  push();
  fill(255,0,0);
  stroke(255,0,0);
  textSize(35);
  text("Time: " + timer.toFixed(1) + " seconds", 10,  30);
  pop();

  timer += deltaTime/1000;
}

function printRetry()
{
    push();
    fill("#6effa9");
    stroke("#6effa9");
    textSize(35);
    textAlign(CENTER,CENTER);
    text("Incorrect, please try again!", width/2, 3*height/4);
    pop();
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