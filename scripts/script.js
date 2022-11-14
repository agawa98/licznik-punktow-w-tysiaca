window.onbeforeunload = function () {return false;}

function newRound(){

    //jesli sa same zera, przerwij
    if(document.getElementById("player1AddScore").value==0 && document.getElementById("player2AddScore").value==0  && document.getElementById("player3AddScore").value==0  && document.getElementById("player4AddScore").value==0 ){
        console.log("asd")
        return
    } 

    //dodaj wyniki z rundy do totala
    for(let i=1; i<5 ;i++){
        

        document.getElementById("player"+i+"Total").textContent = Number(document.getElementById("player"+i+"Total").textContent) + Number(document.getElementById("player"+i+"AddScore").value);
        
        let kol = document.createElement('td')
        kol.textContent = Number(document.getElementById("player"+i+"AddScore").value)
        if(Number(document.getElementById("player"+i+"AddScore").value)==0){
            kol.textContent = "0"
        }
        document.getElementById("player"+i+"Row").appendChild(kol)
        
        document.getElementById("player"+i+"AddScore").value = null
    }
}