var rand1=Math.floor(Math.random()*6)+1;
var rand2=Math.floor(Math.random()*6)+1;
var img1src="images/dice"+rand1+".png";
var img2src="images/dice"+rand2+".png";

document.querySelectorAll("img")[0].setAttribute("src",img1src);
document.querySelectorAll("img")[1].setAttribute("src",img2src);

if(rand1>rand2)
{
  document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if(rand2>rand1)
{
  document.querySelector("h1").innerHTML="Player 2 wins🚩";
}
else
{
  document.querySelector("h1").innerHTML="Draw!";
}
