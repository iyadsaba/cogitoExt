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

 