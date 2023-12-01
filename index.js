var p1WinCount = 0;
var p2WinCount = 0;


function buttonClick()
{
    var d1Val = Math.round(Math.random() * 5) + 1;
    var d2Val = Math.round(Math.random() * 5) + 1;

    document.querySelector(".img1").setAttribute("src", "images/dice" + d1Val + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + d2Val + ".png");

    if (d1Val > d2Val)
    {
        p1WinCount++;
        document.querySelector("#p1win").textContent="Win count: " + p1WinCount;
        document.querySelector(".p1 > p").textContent="🚩Player 1🚩";
        document.querySelector(".p2 > p").textContent="Player 2";

    }
    else if (d2Val > d1Val)
    {
        p2WinCount++;
        document.querySelector("#p2win").textContent="Win count: " + p2WinCount;
        document.querySelector(".p2 > p").textContent="🚩Player 2🚩";
        document.querySelector(".p1 > p").textContent="Player 1";


    }
}
