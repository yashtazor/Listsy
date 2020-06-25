alert("Reached in request.js");

$(document).ready(function(){    

    $('form').on('submit', function()
    {
        console.log("Reached in form");
        var item = $('form input');
        var todo = {item: item.val()};

        $.ajax({
            type: 'POST',
            url: '/listsy',
            data: todo, 
            success: function(data)
            {
                alert("Reloading after this");
                location.reload();
            }
        });

    });

});
