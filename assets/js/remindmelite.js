$('#main-container li').on("click", function(){

    $(this).toggleClass("completed-li")
});

$('#main-container .remove-button').on("click", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(200, function(){
        $(this).remove();
    });

});

