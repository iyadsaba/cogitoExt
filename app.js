
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
    // let hour = prompt("hour UTC ?");
    // let min = prompt("minuets");
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
    alert(`total :${total}`);

    function isVisible (ele) {
        var style = window.getComputedStyle(ele);
        return  style.width !== "0" &&
        style.height !== "0" &&
        style.opacity !== "0" &&
        style.display!=='none' &&
        style.visibility!== 'hidden';
    }
    
 }

 console.log("%c app files called 22222222222222", "font-size:20px;")

 function showAllLeauges(){
    console.log("%c showAllLeauges invoked ","font-size:20px;")

    let leagues  = [...document.querySelectorAll("li.slide")];
    leagues.forEach(function(el){
            el.setAttribute("style","display:block;");
    })
 }

 
//  document.getElementById("show").addEventListener('click', function(){
//      console.log("%c app files called", "font-size:20px;")
//  });

let showBtn = document.getElementById("show");
let hideBtn = document.getElementById("hide");
showBtn.addEventListener('click',showAllLeauges)
hideBtn.addEventListener('click',showTradedLeauges)

// chrome.tabs.sendMessage(activeTabs[0].id, { action: 'executeCode' });

// hideBtn.addEventListener('click', function() {
//     chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
//         // WAY 1
//         chrome.tabs.executeScript(activeTabs[0].id, { code: showTradedLeauges()});
//     });
// });

