
$(document).ready(function(){
    var projs = [
        { t: "Mood Food",
            d: "empty description",
            image: "./assets/media/HeadShot.jpg",
            repo: "https://github.com/hgowton/MoodFood",
            actL: "https://hgowton.github.io/MoodFood/"},
        { t: "Humanitarian Game",
            d: "empty description",
            image: "./assets/media/HeadShot.jpg",
            repo: "https://github.com/hgowton/unit-4-game",
            actL: "https://hgowton.github.io/unit-4-game/"},
        { t: "Giphy API",
            d: "empty description",
            image: "./assets/media/HeadShot.jpg",
            repo: "https://github.com/hgowton/GiphyAPI",
            actL: "https://hgowton.github.io/GiphyAPI/"},
        { t: "Trivia Game",
            d: "empty description",
            image: "./assets/media/HeadShot.jpg",
            repo: "https://github.com/hgowton/TriviaGame",
            actL: "https://hgowton.github.io/TriviaGame/"}
    ]

    console.log(projs[1].t);

    $("#aboutOpt").on("click", function(about) {
        about.preventDefault();
        $("#aboutOpt").addClass("active")
        $("#about").removeClass("displayNone")
        $("#contact").addClass("displayNone")
        $("#projects").addClass("displayNone")
        $("#mood").addClass("displayNone")
        $("#human").addClass("displayNone")
        $("#giphy").addClass("displayNone")
        $("#trivia").addClass("displayNone")
        $("#projectsOpt").removeClass("active")
        $("#contactOpt").removeClass("active")
        $("#moodOpt").removeClass("active")
        $("#humanOpt").removeClass("active")
        $("#giphyOpt").removeClass("active")
        $("#triviaOpt").removeClass("active")
    });
    
    $("#projectsOpt").on("click", function(project) {
        project.preventDefault();
        $("#projectsOpt").addClass("active")
        $("#projects").removeClass("displayNone")
        $("#about").addClass("displayNone")
        $("#mood").addClass("displayNone")
        $("#human").addClass("displayNone")
        $("#giphy").addClass("displayNone")
        $("#trivia").addClass("displayNone")
        $("#contact").addClass("displayNone")
        $("#aboutOpt").removeClass("active")
        $("#contactOpt").removeClass("active")
        $("#moodOpt").removeClass("active")
        $("#humanOpt").removeClass("active")
        $("#giphyOpt").removeClass("active")
        $("#triviaOpt").removeClass("active")
    });

    function pType (x){   
        $(".projectType").empty();
        console.log("repo URL for Mood" + projs[x].t)
        var projectDiv = $("<div class='container projectType'>");
        var pr1 = $("<div class='row'>");
        var projTitle = $("<div>").addClass("col-md-12")
        var title = $("<h3>").append(projs[x].t);
        projTitle.append(title);
        var des = $("<p>").append(projs[x].d);
        projTitle.append(des);
        pr1.append(projTitle);
        projectDiv.append(pr1);
        
        var pr2 = $("<div class='row'>");
        var piDiv = $("<div class='col-md-9'>");
        var pImg = $("<img class='prjImg responsive-img'>").attr("src", projs[x].image).attr("alt", "image of the project");
        piDiv.append(pImg);
        pr2.append(piDiv);
        
        var pbArea = $("<div class='col-md-3'>");
        var pBtnR = $("<button>").addClass("goTo")
        var prLink = $("<a target='_blank'>").attr("href", projs[x].repo).text("Git Hub Repo")
        pBtnR.append(prLink)
        pbArea.append(pBtnR)
        var pBtnA = $("<button>").addClass("goTo")
        var paLink = $("<a target='_blank'>").attr("href", projs[x].actL).attr("target", "_blank").text("Active Link")
        pBtnA.append(paLink)
        pbArea.append(pBtnA)
        pr2.append(pbArea);
        projectDiv.append(pr2)

        $("#typePro").append(projectDiv)
    }
    

    $("#moodOpt").on("click", function(mood) {
        mood.preventDefault();
        $("#projectsOpt").addClass("active")
        $("#typePro").removeClass("displayNone")
        $("#moodOpt").addClass("active")
        $("#projects").addClass("displayNone")
        $("#about").addClass("displayNone")
        $("#aboutOpt").removeClass("active")
        $("#contactOpt").removeClass("active")
        $("#humanOpt").removeClass("active")
        $("#giphyOpt").removeClass("active") 
        $("#triviaOpt").removeClass("active")
        pType(0);
    });

    $("#humanOpt").on("click", function(human) {
        human.preventDefault();
        $("#projectsOpt").addClass("active")
        $("#typePro").removeClass("displayNone")
        $("#humanOpt").addClass("active")
        $("#projects").addClass("displayNone")
        $("#about").addClass("displayNone")
        $("#contact").addClass("displayNone")
        $("#aboutOpt").removeClass("active")
        $("#contactOpt").removeClass("active")
        $("#moodOpt").removeClass("active")
        $("#giphyOpt").removeClass("active") 
        $("#triviaOpt").removeClass("active")
        pType(1);

    });

    $("#giphyOpt").on("click", function(giphy) {
        giphy.preventDefault();
        $("#projectsOpt").addClass("active")
        $("#typePro").removeClass("displayNone")
        $("#giphyOpt").addClass("active")
        $("#projects").addClass("displayNone")
        $("#about").addClass("displayNone")
        $("#contact").addClass("displayNone")
        $("#aboutOpt").removeClass("active")
        $("#contactOpt").removeClass("active")
        $("#moodOpt").removeClass("active")
        $("#humanOpt").removeClass("active") 
        $("#triviaOpt").removeClass("active")  
        pType(2);

    });

    $("#triviaOpt").on("click", function(trivia) {
        trivia.preventDefault();
        $("#projectsOpt").addClass("active")
        $("#typePro").removeClass("displayNone")
        $("#triviaOpt").addClass("active")
        $("#projects").addClass("displayNone")
        $("#about").addClass("displayNone")
        $("#contact").addClass("displayNone")
        $("#aboutOpt").removeClass("active")
        $("#contactOpt").removeClass("active")
        $("#moodOpt").removeClass("active")
        $("#giphyOpt").removeClass("active") 
        $("#humanOpt").removeClass("active")
        pType(3);

    });

    $("#contactOpt").on("click", function(about) {
        about.preventDefault();
        $("#contactOpt").addClass("active")
        $("#contact").removeClass("displayNone")
        $("#about").addClass("displayNone")
        $("#projects").addClass("displayNone")
        $("#mood").addClass("displayNone")
        $("#human").addClass("displayNone")
        $("#giphy").addClass("displayNone")
        $("#trivia").addClass("displayNone")
        $("#projectsOpt").removeClass("active")
        $("#aboutOpt").removeClass("active")
        $("#moodOpt").removeClass("active")
        $("#humanOpt").removeClass("active")
        $("#giphyOpt").removeClass("active")
        $("#triviaOpt").removeClass("active")
    });



});