window.onbeforeunload = function () {return false;}


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


        //cookiebuilder
        document.cookie = "player"+i+"Name="+document.getElementById("player"+i+"Name").value+";expires=Tue, 19 Jan 2038 04:14:07 GMT"

        document.cookie = "player"+i+"Score="+document.getElementById("player"+i+"Total").innerText+";expires=Tue, 19 Jan 2038 04:14:07 GMT"
    }

}