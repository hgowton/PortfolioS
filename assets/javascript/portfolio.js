
$(document).ready(function(){
    var projs = [
        { t: "Mood Food",
            d: "Upload a URL of an image from Google, your age, and select a specific location.  3 specific recipes, restaurants, or cocktail locations will be selected specifically for your mood.  Click on the image button for each option to learn more about your Mood Food suggestions.",
            img: ["./assets/media/mood1.png", "./assets/media/moodFood.jpg"],
            repo: "https://github.com/hgowton/MoodFood",
            actL: "https://hgowton.github.io/MoodFood/"},
        { t: "Humanitarian Game",
            d: "An interactive game, where each round the user needs to determine how many Humanitarian Points they can earn by helping each animal.  Reach the round goal and bank your points.  Bank enough points to become an Expert Humanitarian.",
            img: ["./assets/media/humanitarian.png", "./assets/media/pets.jpg"],
            repo: "https://github.com/hgowton/unit-4-game", 
            actL: "https://hgowton.github.io/unit-4-game/"},
        { t: "Giphy API",
            d: "Return images of specific emotions or create your own emotion button.  Click on each button to see the image come to life.",
            img: ["./assets/media/giphyAPI.png", "./assets/media/colors.jpg"],
            repo: "https://github.com/hgowton/GiphyAPI",
            actL: "https://hgowton.github.io/GiphyAPI/"},
        { t: "LIRI APP",
            d: "LIRI is a node App designed to function similar to SIRI on the iPhone.  Instead of utilizing speech recognition, LIRI takes in commands through terminal to provide specific data.",
            img: ["./assets/media/LIRIapp.png", "./assets/media/LIRIapp.png"],
            repo: "https://github.com/hgowton/LIRI",
            actL: "https://github.com/hgowton/LIRI"},
        { t: "Trivia Game",
            d: "Test your knowledge of the largest biome on the planet.  Be careful to log in your answer before the clock hits 0.",
            img: ["./assets/media/oceanT.png", "./assets/media/trivia.jpg"],
            repo: "https://github.com/hgowton/LIRI",
            actL: "https://hgowton.github.io/LIRI/"},
        { t: "Bamazon APP",
            d: "The Bamazon application works in two parts to create an online store accessible through the terminal.  The customer side can view inventory.  Then make purchases based on the current stock.  From the manager side, you can view current and low inventory, add to inventory, and add new products.",
            img: ["./assets/media/Bamazon.png", "./assets/media/Bamazon.png"],
            repo: "https://github.com/hgowton/Bamazon",
            actL: "https://github.com/hgowton/Bamazon"},
        { t: "Friend Finder APP",
            d: "Answer a few simple questions to determine which Stranger Things character most reflects your personality.",
            img: ["./assets/media/friendFinder.png", "./assets/media/friendFinder.png"],
            repo: "https://github.com/hgowton/friendFinder",
            actL: "https://young-tundra-00852.herokuapp.com"}

    ]

    console.log(projs[1].t);

    $("#aboutOpt").on("click", function(about) {
        about.preventDefault();
        emptyP();

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

    function emptyP (){        
        $(".projectType").empty();
        $("#projects").empty();
    }
    
    function type (){
        emptyP();
        var tProj = $("<h3>").text("Projects");
        $("#projects").append(tProj);
        var iProj = $("<p>").text("Click on any image below to be taken to one of my active project sites or click on a Project Name in the navigation bar to delve deeper into each one.")
        $("#projects").append(iProj);


    for(i = 0; i < projs.length; i++) {
        console.log("testing")
            var p = $("<div>").addClass("projs");
            var plink = $("<a target='_blank'>").attr("href", projs[i].actL)
            var pImage = $("<img class='image-fluid'>").attr("src", projs[i].img[1]).attr("alt", "static image of project").addClass("pMain");
            // var titleP = $("<h3>").text(projs[i].t).addClass("titleP")
            //check this out for understanding
            plink.append(pImage)
            // plink.append(titleP)
            p.append(plink)
            $("#projects").append(p)
        }
    }

    $("#projectsOpt").on("click", function(project) {
        project.preventDefault();
        emptyP();
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
        type();
    });

    function pType (x){   
        emptyP();
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
        var pImg = $("<img class='prjImg img-fluid'>").attr("src", projs[x].img[0]).attr("alt", "image of the project");
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
        emptyP();

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