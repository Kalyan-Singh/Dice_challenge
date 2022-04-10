function myFunction(){
    document.querySelector(".container .player .p1").innerHTML="here!"
}
function game(){
    var x=Math.floor(Math.random()*6)+1;
    var y=Math.floor(Math.random()*6)+1;

    if (x==1){
        document.getElementById("d1").src="images/dice1.png";
    }
    if (x==2){
        document.getElementById("d1").src="images/dice2.png";
    }
    if (x==3){
        document.getElementById("d1").src="images/dice3.png";
    }
    if (x==4){
        document.getElementById("d1").src="images/dice4.png";
    }
    if (x==5){
        document.getElementById("d1").src="images/dice5.png";
    }
    if (x==6){
        document.getElementById("d1").src="images/dice6.png";
    }
    if (y==1){
        document.getElementById("d2").src="images/dice1.png";
    }
    if (y==2){
        document.getElementById("d2").src="images/dice2.png";
    }
    if (y==3){
        document.getElementById("d2").src="images/dice3.png";
    }
    if (y==4){
        document.getElementById("d2").src="images/dice4.png";
    }
    if (y==5){
        document.getElementById("d2").src="images/dice5.png";
    }
    if (y==6){
        document.getElementById("d2").src="images/dice6.png";
    }
    if (x>y){
        var heading = document.querySelector(".container h1");
        heading.innerHTML="<em>Player1 wins!</em>";
        var img=new Image();
        img.src="images/flag.jpeg";
        img.width=120;
        var parent=document.querySelector(".container h1");
        parent.prepend(img);
    }   
    if (x<y){
        var heading = document.querySelector(".container h1");
        heading.innerHTML="<em>Player2 wins!  </em>";
        var img=new Image();
        img.src="images/flag.jpeg";
        img.width=120;
        var parent=document.querySelector(".container h1");
        parent.append(img);
    }
    if (x==y){
        document.querySelector(".container h1").innerHTML="<em> Draw!<em>";
    }
}
