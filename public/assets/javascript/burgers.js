$(function () {
    $(".devour").on("click", function (event) {
        event.preventDefault();

        var idv = $(this).data("id");

        var id = {
            id: idv
        };

        console.log(id);

        $.ajax("/", {
            type: "PUT",
            data: id
        }).then(
            function () {
                console.log("om nom");

                location.reload();
            }
        );
    });

});




// $(document).on('click', '.devour'), function (event) {
//     var id = $(this).data('id');
//     console.log("click")
//     $.ajax('/', {
//         type: 'PUT',
//         data: id
//     }).then(function () {
//         console.log('Devoured');
//         location.reload();
//     });
// };

console.log('Loaded');