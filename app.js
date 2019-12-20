function openSettings() {
    document.getElementById("settings").classList.toggle("settings-open");
    console.log("%c test upload files","font-size:20px;")
 }
 function showTradedLeauges(){
    const chosenLeagues = ['spain2' , 'germany3' , 'england2' , 'netherlands2','france2']; 
    let leagues  = [...document.querySelectorAll(".match-league")];
    leagues.forEach(function(el){
        if(chosenLeagues.indexOf(el.getAttribute("title")) < 0){
            el.closest("li").setAttribute("style","display:none;");
        }
    });
 }

 console.log("%c app files called 1111", "font-size:20px;")


 function showAllLeauges(){
    let leagues  = [...document.querySelectorAll("li.slide")];
    leagues.forEach(function(el){
            el.setAttribute("style","display:block;");
    })
 }
//  document.getElementById("show").addEventListener('click', function(){
//      console.log("%c app files called", "font-size:20px;")
//  });

// let showBtn = document.getElementById("show");
// let hideBtn = document.getElementById("hide");
// showBtn.addEventListener('click',showAllLeauges)
// hideBtn.addEventListener('click',showTradedLeauges)

// chrome.tabs.sendMessage(activeTabs[0].id, { action: 'executeCode' });

// hideBtn.addEventListener('click', function() {
//     chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
//         // WAY 1
//         chrome.tabs.executeScript(activeTabs[0].id, { code: showTradedLeauges()});
//     });
// });

