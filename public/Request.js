console.log("Reached in request.js");

$(document).ready(function(){    

    $('form').on('submit', function()
    {
        var item = $('form input');
        var todo = {item: item.val()};

        $.ajax({
            type: 'POST',
            url: '/listsy',
            data: todo, 
            success: function(data)
            {
                location.reload();
            }
        });

        return false;
    });

    $('li').on('click', function()
    {
        var item = $(this).text().replace(/ /g, "-");

        $.ajax({
            type: 'DELETE',
            url: '/listsy/'+item,
            success: function(data)
            {
                location.reload();
            }
        });

    });

});