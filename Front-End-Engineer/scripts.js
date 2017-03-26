$(document).ready(function() {
    //text input field fades in over .5 seconds after 1 second og page load completion
    setTimeout(function() {
        $("#inputBox").fadeIn(1000, function() {
            $('#inputBox').focus();
        });
    }, 500); //0.5 second of input field fade in

    //for displaying the button
    $("#inputBox").on('change keyup', function() {
        var input = $("#inputBox").val();
        var btn = $("#saveBtn");
        if (input) {
            btn.show();
            btn.prop('disabled', false);
        } else {
            btn.prop('disabled', true);
        }
    });

    //for handling the 'Enter' for input box
    $('#inputBox').keypress(function(e) {
        if (e.which == 13 && $("#inputBox").val()) {
            $('#saveBtn').click();
        }
    });

    //attaching the onclick event handler to the button
    $("#saveBtn").on('click', function() {
        var btn = $("#saveBtn");
        btn.prop('disabled', true); // disabling the button 
        btn.prop('value', 'Saving'); // changing the text from 'Save' to 'Saving'
        setTimeout(function() {
            $("#saveBtn").fadeOut(1000, function() {
                $("#saveBtn").prop('value', 'Save');
                setTimeout(function() {
                    $("#inputBox").fadeOut(2000, function() {
                        setTimeout(function() {
                            $("#inputLabel").text($("#inputBox").val());
                            $("#inputLabel").fadeIn(1000);
                        }, 1000);
                    });
                }, 1000); // 1 second for input field fading out
            });
        }, 1000); // 1 second for button fading out
    })
});