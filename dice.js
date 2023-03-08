var random_1;
var random_2;
var ranImg_1;
var ranImg_2;

random_1 = Math.floor(Math.random()*6)+1; 
console.log(random_1);

random_2 = Math.floor(Math.random()*6)+1; 
console.log(random_2);

ranImg_1 = "images/dice"+random_1+".png";
document.querySelector(".box-1 img").setAttribute("src",ranImg_1);

ranImg_2 = "images/dice"+random_2+".png";
document.querySelector(".box-2 img").setAttribute("src", ranImg_2);

if(random_1>random_2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
  }else if(random_1<random_2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
  }else if(random_1==random_2){
    document.querySelector("h1").innerHTML = "Draw";
  }




  //.....................................First version long working code.........................//


/*if(random_1==0){
   document.querySelector(".box-1 img").setAttribute("src","images/dice1.png")
}else if(random_1==1){
    document.querySelector(".box-1 img").setAttribute("src","images/dice2.png")
 }else if(random_1==2){
    document.querySelector(".box-1 img").setAttribute("src","images/dice3.png")
 }else if(random_1==3){
    document.querySelector(".box-1 img").setAttribute("src","images/dice4.png")
 }else if(random_1==4){
    document.querySelector(".box-1 img").setAttribute("src","images/dice5.png")
 }else if(random_1==5){
    document.querySelector(".box-1 img").setAttribute("src","images/dice6.png")
 }
 if(random_2==0){
    document.querySelector(".box-2 img").setAttribute("src","images/dice1.png")
 }else if(random_2==1){
     document.querySelector(".box-2 img").setAttribute("src","images/dice2.png")
  }else if(random_2==2){
     document.querySelector(".box-2 img").setAttribute("src","images/dice3.png")
  }else if(random_2==3){
     document.querySelector(".box-2 img").setAttribute("src","images/dice4.png")
  }else if(random_2==4){
     document.querySelector(".box-2 img").setAttribute("src","images/dice5.png")
  }else if(random_2==5){
     document.querySelector(".box-2 img").setAttribute("src","images/dice6.png")
  }
 when user hits the refresh generate two random number till 6 according to it manipuate the dice image and compare them and decide 
who is the winner and manipulate html text and display the result 
  */
  
  
