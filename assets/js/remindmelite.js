$('#main-container ul').on("click", "li", function(){

    $(this).toggleClass("completed-li")
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

            $('#tasks-list').append('<li><span class="remove-button">X</span> ' + todoText + '</li>');
        }
    }
})
