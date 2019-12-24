console.log("%c app files called 333333", "font-size:20px;color:yellow;")

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function setTotal(info){
    document.getElementById("total").innerText = info.total;
    console.log("%c setTotal invoked!","font-size:30px;")
}

docReady(function () {
    console.log("%c document ready ", "font-size:20px;color:yellow;")
    let showBtn = document.getElementById("show");
    let hideBtn = document.getElementById("hide");
    let checkBtn = document.getElementById("check");
    let countBtn = document.getElementById("count");

    hideBtn.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { todo: "hide" });
        });
    });
    showBtn.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { todo: "show" } , setTotal);
        });
    });
    checkBtn.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { todo: "notTreaded" });
        });
    });
    countBtn.addEventListener('click', function () {
        console.log("%c click event invoked!","font-size:30px;")
        let hour =  document.getElementById("hour").value;
        let minute =  document.getElementById("minute").value;
        console.log(`hour : ${hour}`, "font-size:30px;")
        console.log(`minute : ${minute}`, "font-size:30px;")

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { todo: "count" , hour , minute });
        });
    });

});




