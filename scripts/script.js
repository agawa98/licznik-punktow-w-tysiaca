window.onbeforeunload = function () {return false;}


//dostosowywanie szerokosci tabelki z wynikami

window.addEventListener("load", ()=>{
    document.getElementById("scoreTableDiv").style.width = document.getElementById("tabela").clientWidth-document.getElementById("addScoreTable").clientWidth+"px";

    document.getElementById("newRound").addEventListener("click",newRound)
    document.getElementById("clear").addEventListener("click",clear)


})
window.addEventListener("resize",()=>{
    document.getElementById("scoreTableDiv").style.width = document.getElementById("tabela").clientWidth-document.getElementById("addScoreTable").clientWidth+"px";
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
        console.log("asd")
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
        
    }

}


function clear(){
    if(confirm("czy jesteś pewien?")==true){
        for(let i=1;i<5;i++){
            document.getElementById("player"+i+"Total").textContent = "0"
            document.getElementById("player"+i+"AddScore").value = null
            cookieBuilder(i)
        }
        historia = document.getElementsByClassName("history")
        for(let i=0;i<historia.length;i++){
            historia[i].remove()
        }
    }
    else{
        return
    }
}