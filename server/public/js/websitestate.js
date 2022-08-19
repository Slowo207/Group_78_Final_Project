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
  if(localStorage.getItem("grade") == 1)
  {
    document.getElementById("Game_Name").innerHTML = "Primary 1"
  }
  else if(localStorage.getItem("grade") == 2)
  {
    document.getElementById("Game_Name").innerHTML = "Primary 2"
  }
  else if(localStorage.getItem("grade") == 3)
  {
    document.getElementById("Game_Name").innerHTML = "Primary 3"
  }

  //add game name to title text
  if(localStorage.getItem("game") == 1)
  {
    document.getElementById("Game_Name").innerHTML += " Fishing Race"
  }
  else if(localStorage.getItem("game") == 3)
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
  var levelbtns = document.getElementsByClassName("levelbtn");
  
  var maxlevel;

  //get corresponding max level
  if(localStorage.getItem("game") == 1)
  {
    if(localStorage.getItem("grade") == 1)
    {
      maxlevel = localStorage.getItem("g1p1maxlevel");
    }
    else if(localStorage.getItem("grade") == 2)
    {
      maxlevel = localStorage.getItem("g1p2maxlevel");
    }
    else if(localStorage.getItem("grade") == 3)
    {
      maxlevel = localStorage.getItem("g1p3maxlevel");
    }
  }
  else if(localStorage.getItem("game") == 3)
  {
    if(localStorage.getItem("grade") == 1)
    {
      maxlevel = localStorage.getItem("g3p1maxlevel");
    }
    else if(localStorage.getItem("grade") == 2)
    {
      maxlevel = localStorage.getItem("g3p2maxlevel");
    }
    else if(localStorage.getItem("grade") == 3)
    {
      maxlevel = localStorage.getItem("g3p3maxlevel");
    }
  }

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
    if(localStorage.getItem("grade") == 1)
    {
      levelbtns[i].id = "p1";
    }
    else if(localStorage.getItem("grade") == 2)
    {
      levelbtns[i].id = "p2";
    }
    else if(localStorage.getItem("grade") == 3)
    {
      levelbtns[i].id = "p3";
    }

    //change gamehost to correct game (game 1 and 3)
    if(localStorage.getItem("game") == 1)
    {
      if(localStorage.getItem("grade") == 1) 
      {
        levelbtns[i].parentElement.href = "/g1gamehostingp1"
      }
      else if(localStorage.getItem("grade") == 2)
      {
        levelbtns[i].parentElement.href = "/g1gamehostingp2"
      }
      else if(localStorage.getItem("grade") == 3)
      {
        levelbtns[i].parentElement.href = "/g1gamehostingp3"
      }
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
  var g2host = document.querySelector('[href="#g2"]')
  if(localStorage.getItem("grade") == 1)
  {
    g2host.setAttribute("href", "/g2gamehostingp1")
  }
  else if(localStorage.getItem("grade") == 2)
  {
    g2host.setAttribute("href", "/g2gamehostingp2")
  }
  else if(localStorage.getItem("grade") == 3)
  {
    g2host.setAttribute("href", "/g2gamehostingp3")
  }
}



