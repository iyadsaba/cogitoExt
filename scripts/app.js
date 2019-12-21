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

docReady(function () {
    console.log("%c document ready ", "font-size:20px;color:yellow;")
    let showBtn = document.getElementById("show");
    let hideBtn = document.getElementById("hide");

    hideBtn.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { todo: "hide" });
        });
    });

    showBtn.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { todo: "show" });
        });
    });

});




