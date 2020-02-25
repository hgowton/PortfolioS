
$(document).ready(function(){

    $("#aboutOpt").on("click", function(about) {
        about.preventDefault();
        $("#aboutOpt").addClass("active")
        $("#about").removeClass("displayNone")
        $("#contact").addClass("displayNone")
        $("#projects").addClass("displayNone")
        $("#projectsOpt").removeClass("active")
        $("#contactOpt").removeClass("active")
        $("#moodOpt").removeClass("active")
        $("#humanOpt").removeClass("active")
        $("#giphyOpt").removeClass("active")
        $("#triviaOpt").removeClass("active")
    });
    
    //fix
    $("#projectsOpt").on("click", function(project) {
        project.preventDefault();
        $("#projectsOpt").addClass("active")
        $("#projects").removeClass("displayNone")
        $("#about").addClass("displayNone")
        $("#contact").addClass("displayNone")
        $("#aboutOpt").removeClass("active")
        $("#contactOpt").removeClass("active")
        $("#moodOpt").removeClass("active")
        $("#humanOpt").removeClass("active")
        $("#giphyOpt").removeClass("active")
        $("#triviaOpt").removeClass("active")
    });

    $("#moodOpt").on("click", function(mood) {
        mood.preventDefault();
        $("#projectsOpt").addClass("active")
        $("#projects").removeClass("displayNone")
        $("#moodOpt").addClass("active")
        $("#projects").addClass("displayNone")
        $("#about").addClass("displayNone")
        $("#contact").addClass("displayNone")
        $("#aboutOpt").removeClass("active")
        $("#contactOpt").removeClass("active")
        $("#humanOpt").removeClass("active")
        $("#giphyOpt").removeClass("active") 
        $("#triviaOpt").removeClass("active")
    });

    $("#humanOpt").on("click", function(human) {
        human.preventDefault();
        $("#projectsOpt").addClass("active")
        $("#projects").removeClass("displayNone")
        $("#humanOpt").addClass("active")
        $("#projects").addClass("displayNone")
        $("#about").addClass("displayNone")
        $("#contact").addClass("displayNone")
        $("#aboutOpt").removeClass("active")
        $("#contactOpt").removeClass("active")
        $("#moodOpt").removeClass("active")
        $("#giphyOpt").removeClass("active") 
        $("#triviaOpt").removeClass("active")
    });

    $("#giphyOpt").on("click", function(giphy) {
        giphy.preventDefault();
        $("#projectsOpt").addClass("active")
        $("#projects").removeClass("displayNone")
        $("#giphyOpt").addClass("active")
        $("#projects").addClass("displayNone")
        $("#about").addClass("displayNone")
        $("#contact").addClass("displayNone")
        $("#aboutOpt").removeClass("active")
        $("#contactOpt").removeClass("active")
        $("#moodOpt").removeClass("active")
        $("#humanOpt").removeClass("active") 
        $("#triviaOpt").removeClass("active")  
    });

    $("#triviaOpt").on("click", function(trivia) {
        trivia.preventDefault();
        $("#projectsOpt").addClass("active")
        $("#projects").removeClass("displayNone")
        $("#triviaOpt").addClass("active")
        $("#projects").addClass("displayNone")
        $("#about").addClass("displayNone")
        $("#contact").addClass("displayNone")
        $("#aboutOpt").removeClass("active")
        $("#contactOpt").removeClass("active")
        $("#moodOpt").removeClass("active")
        $("#giphyOpt").removeClass("active") 
        $("#humanOpt").removeClass("active")
    });

    $("#contactOpt").on("click", function(about) {
        about.preventDefault();
        $("#contactOpt").addClass("active")
        $("#contact").removeClass("displayNone")
        $("#about").addClass("displayNone")
        $("#projects").addClass("displayNone")
        $("#projectsOpt").removeClass("active")
        $("#aboutOpt").removeClass("active")
        $("#moodOpt").removeClass("active")
        $("#humanOpt").removeClass("active")
        $("#giphyOpt").removeClass("active")
        $("#triviaOpt").removeClass("active")
    });


});