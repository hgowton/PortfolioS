
$(document).ready(function(){
    var projs = [
        { t: "Mood Food",
            d: "Upload a URL of an image from Google, your age, and select a specific location.  3 specific recipes, restaurants, or cocktail locations will be selected specifically for your mood.  Click on the image button for each option to learn more about your Mood Food suggestions.",
            img: ["./assets/media/mood1.png", "./assets/media/moodFood.jpg"],
            repo: "https://github.com/hgowton/MoodFood",
            actL: "https://hgowton.github.io/MoodFood/"},
        { t: " ",
            d: "An MVP based application for a baseball team. This application keeps all team members and their family members up-to-date on upcoming, current, and past games.",
            img: ["./assets/media/littleLeague.png", "./assets/media/littleLeague.png"],
            repo: "https://github.com/hgowton/project2",
            actL: "https://rocky-sea-86685.herokuapp.com/"},
        { t: "Humanitarian Game",
            d: "An interactive game, where each round the user needs to determine how many Humanitarian Points they can earn by helping each animal.  Reach the round goal and bank your points.  Bank enough points to become an Expert Humanitarian.",
            img: ["./assets/media/humanitarian.png", "./assets/media/pets.jpg"],
            repo: "https://github.com/hgowton/unit-4-game", 
            actL: "https://hgowton.github.io/unit-4-game/"},
        { t: "Trivia Game",
            d: "Test your knowledge of the largest biome on the planet.  Be careful to log in your answer before the clock hits 0.",
            img: ["./assets/media/oceanTrivia.png", "./assets/media/trivia.jpg"],
            repo: "https://github.com/hgowton/Trivia2",
            actL: "https://hgowton.github.io/Trivia2/"},
        { t: "Giphy API",
            d: "Return images of specific emotions or create your own emotion button.  Click on each button to see the image come to life.",
            img: ["./assets/media/giphyAPI.png", "./assets/media/colors.jpg"],
            repo: "https://github.com/hgowton/GiphyAPI",
            actL: "https://hgowton.github.io/GiphyAPI/"},
        { t: "Burgatory",
            d: "The Burgatory App utilizes the MVC design pattern to produce a Full Stack application for ordering and devouring burgers.",
            img: ["./assets/media/burgatory.png", "./assets/media/burgatory.png"],
            repo: "https://github.com/hgowton/burger",
            actL: "https://guarded-garden-11990.herokuapp.com/"},
        { t: "Friend Finder APP",
            d: "Answer a few simple questions to determine which Stranger Things character most reflects your personality.",
            img: ["./assets/media/friendFinder.png", "./assets/media/friendFinder.png"],
            repo: "https://github.com/hgowton/friendFinder",
            actL: "https://young-tundra-00852.herokuapp.com"},
        { t: "Bamazon APP",
            d: "The Bamazon application works in two parts to create an online store accessible through the terminal.  The customer side can view inventory.  Then make purchases based on the current stock.  From the manager side, you can view current and low inventory, add to inventory, and add new products.",
            img: ["./assets/media/bamazon.gif", "./assets/media/Bamazon.png"],
            repo: "https://github.com/hgowton/Bamazon",
            actL: "https://www.youtube.com/watch?v=HcRQrc2g8SU&list=UUtPK4DmGjzHJeJGD25VkwSg&index=22"},
        { t: "LIRI APP",
                d: "LIRI is a node App designed to function similar to SIRI on the iPhone.  Instead of utilizing speech recognition, LIRI takes in commands through terminal to provide specific data.",
                img: ["./assets/media/liri.gif", "./assets/media/LIRIapp.png"],
                repo: "https://github.com/hgowton/LIRI",
                actL: "https://drive.google.com/file/d/17qqnN74faBnxMIz8NMGhwjkg8aWd-fR_/view"},

    ]

    $("#aboutOpt").on("click", function(about) {
        about.preventDefault();
        $("#aboutOpt").addClass("active")
        $("#about").removeClass("displayNone")
        $("#contact").addClass("displayNone")
        $("#projects").addClass("displayNone")
        $("#typePro").addClass("displayNone")
        $("#contactOpt").removeClass("active")
    });
    
    function type (){
        $("#typePro").empty();
        $("#projects").empty();
        var tProj = $("<h3>").text("Projects");
        $("#projects").append(tProj);

//Creates card for each projects based on projs array
    for(i = 0; i < projs.length; i++) {
        var card = $("<div>").addClass("card").attr("style", "width: 18rem;" ).append(
        $("<img>").addClass("card-img-top image-fluid").attr("src", projs[i].img[0]).attr("alt", projs[i].t),
        $("<div>").addClass("card-body"),
        $("<h5>").addClass("card-title").text(projs[i].t),
        $("<p>").addClass("card-text").text(projs[i].d),
        $("<a>").addClass("btn btn-primary").attr("href", projs[i].actL).attr("target", "_blank").text("Active Link"),
        $("<a>").addClass("btn btn-primary").attr("href", projs[i].repo).attr("target", "_blank").text("Repo Link")
        );

        $("#typePro").append(card);
        };
    }

    $("#projectsOpt").on("click", function(project) {
        project.preventDefault();
        $("#projectsOpt").addClass("active")
        $("#projects").removeClass("displayNone")
        $("#typePro").removeClass("displayNone")
        $("#about").addClass("displayNone")
        $("#contact").addClass("displayNone")
        $("#aboutOpt").removeClass("active")
        $("#contactOpt").removeClass("active")
        type();
    });

    $("#contactOpt").on("click", function(about) {
        about.preventDefault();
        $("#contactOpt").addClass("active")
        $("#contact").removeClass("displayNone")
        $("#about").addClass("displayNone")
        $("#projects").addClass("displayNone")
        $("#typePro").addClass("displayNone")
        $("#aboutOpt").removeClass("active")
    });
});