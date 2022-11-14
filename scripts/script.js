function newRound(){
    //dodaj wyniki z rundy do totala
    for(let i=1; i<5 ;i++){
        document.getElementById("player"+i+"Total").textContent = Number(document.getElementById("player"+i+"Total").textContent) + Number(document.getElementById("player"+i+"AddScore").value);
        
        let kol = document.createElement('td')
        kol.textContent = Number(document.getElementById("player"+i+"AddScore").value)
        document.getElementById("player"+i+"Row").appendChild(kol)
        
        document.getElementById("player"+i+"AddScore").value = null
    }
}