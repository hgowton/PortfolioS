
$(document).ready(function(){
    $("#projectsOpt").on("click", function(project) {
        project.preventDefault();
        $("#about").addClass("displayNone")
        $("#contact").addClass("displayNone")
        $("#projectsOpt").addClass("active")
        $("#projects").removeClass("displayNone")
        $("#aboutOpt").removeClass("active")
        $("#contactOpt").removeClass("active")

    });

    $("#contactOpt").on("click", function(contact) {
        contact.preventDefault();
        $("#about").addClass("displayNone")
        $("#projects").addClass("displayNone")
        $("#contactOpt").addClass("active")
        $("#contact").removeClass("displayNone")
        $("#aboutOpt").removeClass("active")
        $("#projectsOpt").removeClass("active")
    });

    $("#aboutOpt").on("click", function(event) {
        event.preventDefault();
        $("#projects").addClass("displayNone")
        $("#contacts").addClass("displayNone")
        $("#aboutOpt").addClass("active")
        $("#about").removeClass("displayNone")
        $("#contactOpt").removeClass("active")
        $("#projectsOpt").removeClass("active")

    });

});