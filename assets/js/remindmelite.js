$('#main-container ul').on("click", "li", function(){

    $(this).toggleClass("completed-li")
});

$('.fa-pencil-square-o').on("click", function(){
    $('#new-task-input').fadeToggle(200);
});

$('#main-container ul').on("click", '.remove-button', function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(200, function(){
        $(this).remove();
    });

});

$('#new-task-input').keydown(function(event){
    if (event.which === 13){ // 13 = Enter Key
        if ($(this).val() != ""){
            var todoText = $(this).val();
            $(this).val("");

            $('#tasks-list').append('<li><span class="remove-button"><i class="fa fa-trash-o" aria-hidden="true"></i> </span><a href="#">' + todoText + '</a></li>');
        }
    }
});
