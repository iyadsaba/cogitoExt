function showAllLeauges(){
    console.log("%c showAllLeauges invoked ","font-size:20px;")

    let leagues  = [...document.querySelectorAll("li.slide")];
    leagues.forEach(function(el){
            el.setAttribute("style","display:block;");
    })
 }
 function showTradedLeauges(){
    console.log("%c showTradedLeauges invoked ","font-size:20px;")

    const chosenLeagues = ['spain2' , 'germany3' , 'england2' , 'netherlands2','france2']; 
    let leagues  = [...document.querySelectorAll(".match-league")];
    leagues.forEach(function(el){
        if(chosenLeagues.indexOf(el.getAttribute("title")) < 0){
            el.closest("li").setAttribute("style","display:none;");
        }
    });
 }
 function countMatches(hour,min){
    let matches = [...document.querySelectorAll("li.slide")];
    let total = 0;
    matches.forEach(function(match){
        if(isVisible(match)){
            let matchKickOff = match.querySelector('.match-start-time').innerText.split(" ")[1].split(":");
            let matchHour = matchKickOff[0];
            let matchMin = matchKickOff[1];
            if(matchHour >= hour && min > matchMin){
                ++total;
            } 
        }
    });
    console.log(`%c total :${total}`, "font-size:20px;color:yellow");


    function isVisible (ele) {
        var style = window.getComputedStyle(ele);
        return  style.width !== "0" &&
        style.height !== "0" &&
        style.opacity !== "0" &&
        style.display!=='none' &&
        style.visibility!== 'hidden';
    }
    
 }

 console.log("%c content script file loaded", "font-size:30px;color:green;")

chrome.runtime.sendMessage({todo: "showPageAction"});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "hide"){
        console.log("%c hide action should trigger", "font-size:30px;color:green;")
       showTradedLeauges();
    }
    else if(request.todo == "show"){
        console.log("%c show action should trigger", "font-size:30px;color:green;")
        showAllLeauges();
    }
});