

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
function setLevel(number)
{
  localStorage.setItem("level", number);
}

function setLevelBtn()
{
  var levelbtns = document.getElementsByClassName("levelbtn");
  
  for (i = 0; i < levelbtns.length; i++)
  {
    //add click event to buttons
    (function(index)
    {
      levelbtns[i].addEventListener("click", function()
      {
        setLevel(index)
      })
    })(i)


    //change title text and button style to correct grade
    if(localStorage.getItem("grade") == 1)
    {
      levelbtns[i].id = "p1";
      document.getElementById("Game_Name").innerHTML = "Primary 1"
    }
    else if(localStorage.getItem("grade") == 2)
    {
      levelbtns[i].id = "p2";
      document.getElementById("Game_Name").innerHTML = "Primary 2"
    }
    else if(localStorage.getItem("grade") == 3)
    {
      levelbtns[i].id = "p3";
      document.getElementById("Game_Name").innerHTML = "Primary 3"
    }

    //add game name to title text
    //change gamehost to correct game (game 1 and 3)
    if(localStorage.getItem("game") == 1)
    {
      document.getElementById("Game_Name").innerHTML += " Fishing Race"

      if(localStorage.getItem("grade") == 1)
      {
        levelbtns[i].parentElement.href = "g1gamehostingp1.html"
      }
      else if(localStorage.getItem("grade") == 2)
      {
        levelbtns[i].parentElement.href = "g1gamehostingp2.html"
      }
      else if(localStorage.getItem("grade") == 3)
      {
        levelbtns[i].parentElement.href = "g1gamehostingp3.html"
      }
    }
    else if(localStorage.getItem("game") == 3)
    {
      document.getElementById("Game_Name").innerHTML += " Fish Market"
      levelbtns[i].parentElement.href = "g3gamehosting.html"
    }
  }
}

//change gamehost to correct game (game 2)
function game2host()
{
  var g2host = document.querySelector('[href="#g2"]')
  if(localStorage.getItem("grade") == 1)
  {
    g2host.setAttribute("href", "g2gamehostingp1.html")
  }
  else if(localStorage.getItem("grade") == 2)
  {
    g2host.setAttribute("href", "g2gamehostingp2.html")
  }
  else if(localStorage.getItem("grade") == 3)
  {
    g2host.setAttribute("href", "g2gamehostingp3.html")
  }
}

