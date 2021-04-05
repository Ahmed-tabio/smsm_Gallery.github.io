var AllCelebrityImagesList=document.querySelectorAll(".celebrity-wrapper .portrait");
var contentOnPortraitViewWindow   =document.querySelector(".view-window .portrait")             ;
var introduceCelebrityLine=document.querySelector("#introduce-celebrity span")     ;

AllCelebrityImagesList.forEach(function(portrait){
    portrait.onclick= function(){

        console.log(portrait);
        console.log(portrait.firstElementChild);
        console.log(portrait.firstElementChild.getAttribute("src"));
        contentOnPortraitViewWindow.firstElementChild.setAttribute("src",portrait.firstElementChild.getAttribute("src"));
        

        var celebrityName= portrait.getAttribute("cname");
        console.log(celebrityName);
        introduceCelebrityLine.innerHTML=celebrityName;
    }
});