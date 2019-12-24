function showAllLeauges() {
    console.log("%c showAllLeauges invoked ", "font-size:20px;")

    let leagues = [...document.querySelectorAll("li.slide")];
    leagues.forEach(function (el) {
        el.setAttribute("style", "display:block;");
    })
}
function showTradedLeauges() {
    console.log("%c showTradedLeauges invoked ", "font-size:20px;")

    const chosenLeagues = ['spain2', 'germany3', 'england2', 'netherlands2', 'france2'];
    let leagues = [...document.querySelectorAll(".match-league")];
    leagues.forEach(function (el) {
        if (chosenLeagues.indexOf(el.getAttribute("title")) < 0) {
            el.closest("li").setAttribute("style", "display:none;");
        }
    });
}
function countMatches(hour, min) {
    let matches = [...document.querySelectorAll("hmd-match-list-widget li.slide")].filter(match => !!isVisible(match));
    return  matches.splice(getIndex(matches)).length;
    function getIndex(arr,el){
        arr.forEach(function (match , i) {
            console.log(match)
            let timeEl = match.querySelector(".match-start-time");
            let matchKickOff = timeEl &&  timeEl.innerText && timeEl.innerText.split(" ")[1].split(":");
            let matchHour = matchKickOff[0];
            let matchMin = matchKickOff[1];
            if (matchHour >= hour && min > matchMin) {
                return i;
            } 
        });
    }
}
function isVisible(ele) {
    var style = window.getComputedStyle(ele);
    return style.width !== "0" &&
        style.height !== "0" &&
        style.opacity !== "0" &&
        style.display !== 'none' &&
        style.visibility !== 'hidden';
}

console.log("%c content script file loaded", "font-size:30px;color:green;")
chrome.runtime.sendMessage({ todo: "showPageAction" });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "hide") {
        console.log("%c hide action should trigger", "font-size:30px;color:green;")
        showTradedLeauges();
    }
    else if (request.todo == "show") {
        console.log("%c show action should trigger", "font-size:30px;color:green;")
        showAllLeauges();
    }
    else if (request.todo == 'notTreaded') {
        let ended = [...document.querySelectorAll("time")].filter(match => isVisible(match));
        let optimized = ended.filter((match) => !!match.getAttribute("datetime"));
        let notOptimized = ended.filter((match) => !match.getAttribute("datetime"));
        console.log(`%c optimized : ${optimized.length + 1}`, "font-size:30px;")
        alert(` optimized : ${optimized.length + 1}`)
        alert(` notOptimized : ${notOptimized.length + 1}`)

        console.log(`%c notOptimized : ${notOptimized.length + 1}`, "font-size:30px;")
    }
    else if(request.todo == "count"){
        console.log(`count event ocurred `, "font-size:30px; color:bule;")
        console.log(`hour : ${request.todo.hour}`, "font-size:30px;;")
        console.log(`minute : ${request.todo.minute}`, "font-size:30px;")
        if(hour && minute){
            console.log(`total : ${countMatches(request.todo.hour,request.todo.minute)}`, "font-size:30px; color:bule;")

            try {
                sendResponse( `{total :${countMatches(request.todo.hour,request.todo.minute)}}`);

            } catch (error) {
                sendResponse('{}');

            }
            // sendResponse( `{total :${countMatches(hour,minute)}}`);
        }

    }
    sendResponse('{}');
});