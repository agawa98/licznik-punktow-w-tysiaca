
//dostosowywanie szerokosci tabelki z wynikami

window.addEventListener("load", ()=>{
    document.getElementById("scoreTableDiv").style.width = document.getElementById("tabela").clientWidth-document.getElementById("addScoreTable").clientWidth-1+"px";

        
    document.getElementById("newRound").addEventListener("click",newRound)

    document.getElementById("clear").addEventListener("click",()=>{
        clear(confirm("czy jesteś pewien?"))
    })

    document.getElementById("winButton").addEventListener("click", ok)
})
window.addEventListener("resize",()=>{
    document.getElementById("scoreTableDiv").style.width = document.getElementById("tabela").clientWidth-document.getElementById("addScoreTable").clientWidth-1+"px";
})



function loadscore(){
    if(document.cookie == ""){
        return;
    }
    var cookies = document.cookie.split(";");
    for(let i=1; i<5; i++){

        for(let j=0; j<cookies.length; j++){
            if(cookies[j].split("=")[0].replace(/ /g, '') =="player"+i+"Name"){
                document.getElementById("player"+i+"Name").value = cookies[j].split("=")[1]
            }
            if(cookies[j].split("=")[0].replace(/ /g, '') =="player"+i+"Score"){
                document.getElementById("player"+i+"Total").innerText = cookies[j].split("=")[1]
            }
        }
    }
}

function cookieBuilder(i){
    document.cookie = "player"+i+"Name="+document.getElementById("player"+i+"Name").value+";expires=Tue, 19 Jan 2038 04:14:07 GMT"

    document.cookie = "player"+i+"Score="+document.getElementById("player"+i+"Total").innerText+";expires=Tue, 19 Jan 2038 04:14:07 GMT"
}



function newRound(){

    //jesli sa same zera, przerwij
    if(document.getElementById("player1AddScore").value==0 && document.getElementById("player2AddScore").value==0  && document.getElementById("player3AddScore").value==0  && document.getElementById("player4AddScore").value==0 ){
        return
    } 


    //dodaj wyniki z rundy do totala
    for(let i=1; i<5 ;i++){
        
       

        document.getElementById("player"+i+"Total").textContent = Number(document.getElementById("player"+i+"Total").textContent) + Number(document.getElementById("player"+i+"AddScore").value);
        
        let kol = document.createElement('td')
        kol.className="history"
        kol.textContent = Number(document.getElementById("player"+i+"AddScore").value)
        if(Number(document.getElementById("player"+i+"AddScore").value)==0){
            kol.textContent = "0"
        }
        document.getElementById("player"+i+"Row").appendChild(kol)
        
        document.getElementById("player"+i+"AddScore").value = null


        cookieBuilder(i)


        //sprawdzanie czy wygral
        if(Number(document.getElementById("player"+i+"Total").textContent)>=1000){
            win(document.getElementById("player"+i+"Name").value)
        }

        
    }

}

var winInterval

var twojaStara = ["twoja stara nosi pierścienie Saturna","twoja stara to gazowy olbrzym","twoja stara ma konto w powerbanku","twoja stara jest tak brzydka ze na jej widok wykonują 5. Symfonię","twoja stara rozpętała burzę na Jowiszu","twoja stara spotkała Sylwię Grzeszczak na zakręcie","twoja stara wpierdala sumy na analizie","twoja stara to najwiekszy producent paliwa rakietowego","twoja stara to największy producent metanu na świecie","twoja stara sra do gara a twój stary to wpierdala","twoja stara doi krowy imadłem","twoja stara ma tyle zębów, że jakby weszła do muzeum to już by jej nie wypuścili","twoja stara jest tak gruba, że spowalnia ci internet w domu","twój stary ma wbudowany destylator","twoja stara jest rdzennym obywatelem wysp wielkanocnych"]

function win(winner){
    winInterval = setInterval(()=>{
        let r = Math.floor(Math.random()*192)+64
        let g = Math.floor(Math.random()*192)+64
        let b = Math.floor(Math.random()*192)+64
        document.getElementById("winBox").style.borderColor = "rgb("+r+","+g+","+b+")"
    },800)

    document.getElementById("winHeaderWrapper").innerText = winner + " wygrał(a)"

    document.getElementById("winContentWrapper").innerText = twojaStara[Math.floor(Math.random()*twojaStara.length)]

    document.getElementById("winScreen").style.display = "block"
}

function ok(){
    document.getElementById("winScreen").style.display = "none"
    clearInterval(winInterval)
    clear(true)
}


function clear(sure){
    if(sure==true){
        for(let i=1;i<5;i++){
            document.getElementById("player"+i+"Total").textContent = "0"
            document.getElementById("player"+i+"AddScore").value = null
            cookieBuilder(i)
        }
        historia = document.getElementsByClassName("history")
        for(let i=historia.length-1;i>=0;i--){
            console.log(i)
            historia[i].remove()
        }
    }
    else{
        return
    }
}
