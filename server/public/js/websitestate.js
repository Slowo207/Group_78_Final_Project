/* set grade state */
function grade1()
{
  localStorage.setItem("grade", 1);
}

function grade2()
{
  localStorage.setItem("grade", 2);
}

function grade3()
{
  localStorage.setItem("grade", 3);
}

/* set game state */
function game1()
{
  localStorage.setItem("game", 1);
}

function game2()
{
  localStorage.setItem("game", 2);
}

function game3()
{
  localStorage.setItem("game", 3);
}

var grade = localStorage.getItem("grade");
var game = localStorage.getItem("game");

/* set level state */
function setLevelPage()
{
  setLevelTitle();
  setBaseLevel();
  setLevelBtn();
}

//set to corresponding title
function setLevelTitle()
{
  //change title text to correct grade
  document.getElementById("Game_Name").innerHTML = "Primary " + grade;

  //add game name to title text
  if(game == 1)
  {
    document.getElementById("Game_Name").innerHTML += " Fishing Race"
  }
  else if(game == 3)
  {
    document.getElementById("Game_Name").innerHTML += " Fish Market"
  }
}

//set all max level to 1 (at the start)
function setBaseLevel()
{
  if(localStorage.getItem("g1p1maxlevel") == null)
  {
    localStorage.setItem("g1p1maxlevel", 1);
  }
  else if(localStorage.getItem("g1p2maxlevel") == null)
  {
    localStorage.setItem("g1p2maxlevel", 1);
  }
  else if(localStorage.getItem("g1p3maxlevel") == null)
  {
    localStorage.setItem("g1p3maxlevel", 1);
  }
  if(localStorage.getItem("g3p1maxlevel") == null)
  {
    localStorage.setItem("g3p1maxlevel", 1);
  }
  else if(localStorage.getItem("g3p2maxlevel") == null)
  {
    localStorage.setItem("g3p2maxlevel", 1);
  }
  else if(localStorage.getItem("g3p3maxlevel") == null)
  {
    localStorage.setItem("g3p3maxlevel", 1);
  }
}

//to help set levels
function setLevel(number)
{
  localStorage.setItem("level", number);
}

//set state of level buttons
function setLevelBtn()
{
  //get all level buttons
  var levelbtns = document.getElementsByClassName("levelbtn");
  
  //get corresponding max level
  var maxlevel = localStorage.getItem("g"+game+"p"+grade+"maxlevel");

  for (i = 0; i < maxlevel; i++)
  {
    //enable link
    levelbtns[i].parentElement.classList.remove("disabled");
    
    //add click event to buttons
    (function(index)
    {
      levelbtns[i].addEventListener("click", function()
      {
        setLevel(index)
      })
    })(i)

    //change button style to correct grade
    levelbtns[i].id = "p"+grade;

    //change gamehost to correct game (game 1 and 3)
    if(localStorage.getItem("game") == 1)
    {
      levelbtns[i].parentElement.href = "/g1gamehostingp"+grade;
    }
    else if(localStorage.getItem("game") == 3)
    {
      levelbtns[i].parentElement.href = "/g3gamehosting"
    }
  }
}

//change gamehost to correct game (game 2)
function game2host()
{
  var g2host = document.querySelector('[href="#g2"]');
  g2host.setAttribute("href", "/g2gamehostingp"+grade);
}