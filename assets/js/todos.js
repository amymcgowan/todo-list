//Check off specific todos by clicking
//with jQuery, can only add listeners to elements that exist when the code is run the first time
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Remove todo when X is clicked
//event arg and stopprop keeps event from bubbling up
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})

//Add input to list
$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    }
})

//toggle form
$("#toggle-form").click(function() {
    $("input[type='text']").fadeToggle();
})