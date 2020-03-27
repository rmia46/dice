var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

function rolldice1() {
    if(randomNumber1 === 1) {
        document.querySelector("#dice1 .one").classList.add("hidden");
        document.querySelector("#dice1 .two").classList.add("hidden");
        document.querySelector("#dice1 .three").classList.add("hidden");
        document.querySelector("#dice1 .four").classList.add("hidden");
        document.querySelector("#dice1 .five").classList.add("hidden");  
        document.querySelector("#dice1 .six").classList.add("hidden");
        document.querySelector("#dice1 .seven").classList.remove("hidden");         
    }
    else if(randomNumber1 === 2) {
        document.querySelector("#dice1 .one").classList.add("hidden");
        document.querySelector("#dice1 .three").classList.add("hidden");
        document.querySelector("#dice1 .four").classList.add("hidden");  
        document.querySelector("#dice1 .six").classList.add("hidden");
        document.querySelector("#dice1 .seven").classList.add("hidden");
        document.querySelector("#dice1 .two").classList.remove("hidden");
        document.querySelector("#dice1 .five").classList.remove("hidden");    
    }
    else if(randomNumber1 === 3) {
        document.querySelector("#dice1 .one").classList.add("hidden");
        document.querySelector("#dice1 .three").classList.add("hidden");
        document.querySelector("#dice1 .four").classList.add("hidden");  
        document.querySelector("#dice1 .six").classList.add("hidden");
        document.querySelector("#dice1 .two").classList.remove("hidden");
        document.querySelector("#dice1 .five").classList.remove("hidden");  
        document.querySelector("#dice1 .seven").classList.remove("hidden");    
    }
    else if(randomNumber1 === 4) {
        
        document.querySelector("#dice1 .three").classList.add("hidden");
        document.querySelector("#dice1 .four").classList.add("hidden");  
        document.querySelector("#dice1 .seven").classList.add("hidden");
        document.querySelector("#dice1 .one").classList.remove("hidden");
        document.querySelector("#dice1 .two").classList.remove("hidden");
        document.querySelector("#dice1 .five").classList.remove("hidden");  
        document.querySelector("#dice1 .six").classList.remove("hidden");    
    }
    else if(randomNumber1 === 5) {
        document.querySelector("#dice1 .three").classList.add("hidden");
        document.querySelector("#dice1 .four").classList.add("hidden"); 
        document.querySelector("#dice1 .one").classList.remove("hidden");
        document.querySelector("#dice1 .two").classList.remove("hidden");
        document.querySelector("#dice1 .five").classList.remove("hidden");  
        document.querySelector("#dice1 .six").classList.remove("hidden");  
        document.querySelector("#dice1 .seven").classList.remove("hidden");    
    }
    else {
        document.querySelector("#dice1 .seven").classList.add("hidden");
        document.querySelector("#dice1 .one").classList.remove("hidden");
        document.querySelector("#dice1 .two").classList.remove("hidden");
        document.querySelector("#dice1 .three").classList.remove("hidden");
        document.querySelector("#dice1 .four").classList.remove("hidden");
        document.querySelector("#dice1 .five").classList.remove("hidden");  
        document.querySelector("#dice1 .six").classList.remove("hidden");  
           
    }    
}
function rolldice2() {
    if(randomNumber2 === 1) {
        document.querySelector("#dice2 .one").classList.add("hidden");
        document.querySelector("#dice2 .two").classList.add("hidden");
        document.querySelector("#dice2 .three").classList.add("hidden");
        document.querySelector("#dice2 .four").classList.add("hidden");
        document.querySelector("#dice2 .five").classList.add("hidden");  
        document.querySelector("#dice2 .six").classList.add("hidden");
        document.querySelector("#dice2 .seven").classList.remove("hidden");         
    }
    else if(randomNumber2 === 2) {
        document.querySelector("#dice2 .one").classList.add("hidden");
        document.querySelector("#dice2 .three").classList.add("hidden");
        document.querySelector("#dice2 .four").classList.add("hidden");  
        document.querySelector("#dice2 .six").classList.add("hidden");
        document.querySelector("#dice2 .seven").classList.add("hidden");
        document.querySelector("#dice2 .two").classList.remove("hidden");
        document.querySelector("#dice2 .five").classList.remove("hidden");    
    }
    else if(randomNumber2 === 3) {
        document.querySelector("#dice2 .one").classList.add("hidden");
        document.querySelector("#dice2 .three").classList.add("hidden");
        document.querySelector("#dice2 .four").classList.add("hidden");  
        document.querySelector("#dice2 .six").classList.add("hidden");
        document.querySelector("#dice2 .two").classList.remove("hidden");
        document.querySelector("#dice2 .five").classList.remove("hidden");  
        document.querySelector("#dice2 .seven").classList.remove("hidden");    
    }
    else if(randomNumber2 === 4) {
        
        document.querySelector("#dice2 .three").classList.add("hidden");
        document.querySelector("#dice2 .four").classList.add("hidden");  
        document.querySelector("#dice2 .seven").classList.add("hidden");
        document.querySelector("#dice2 .one").classList.remove("hidden");
        document.querySelector("#dice2 .two").classList.remove("hidden");
        document.querySelector("#dice2 .five").classList.remove("hidden");  
        document.querySelector("#dice2 .six").classList.remove("hidden");    
    }
    else if(randomNumber2 === 5) {
        document.querySelector("#dice2 .three").classList.add("hidden");
        document.querySelector("#dice2 .four").classList.add("hidden"); 
        document.querySelector("#dice2 .one").classList.remove("hidden");
        document.querySelector("#dice2 .two").classList.remove("hidden");
        document.querySelector("#dice2 .five").classList.remove("hidden");  
        document.querySelector("#dice2 .six").classList.remove("hidden");  
        document.querySelector("#dice2 .seven").classList.remove("hidden");    
    }
    else {
        document.querySelector("#dice2 .seven").classList.add("hidden");
        document.querySelector("#dice2 .one").classList.remove("hidden");
        document.querySelector("#dice2 .two").classList.remove("hidden");
        document.querySelector("#dice2 .three").classList.remove("hidden");
        document.querySelector("#dice2 .four").classList.remove("hidden");
        document.querySelector("#dice2 .five").classList.remove("hidden");  
        document.querySelector("#dice2 .six").classList.remove("hidden");  
           
    }
}
function result() {
    if(randomNumber1 > randomNumber2) {
        document.querySelector("#result").innerHTML = "Player-1 Wins&#x1F6A9";
    }
    else if(randomNumber1 < randomNumber2) {
        document.querySelector("#result").innerHTML = "Player-2 Wins&#x1F6A9";
    }
    else {
        document.querySelector("#result").innerHTML = "Draw!";
    }
}

function reload() {
    document.location.reload(true);
}

rolldice1();
rolldice2();
result();


document.querySelector("#score1").innerHTML = randomNumber1;
document.querySelector("#score2").innerHTML = randomNumber2; 
document.querySelector("input").onclick=reload;
