$(document).ready(function() {
    if ($("body").attr("id") === "lapor-1") {
        $(".next-button").on("click", function() {
            window.location.href = "lapor-2.html";
        });   
    }

    if ($("body").attr("id") === "lapor-2") {
        $(".prev-button").on("click", function() {
            window.location.href = "lapor-1.html";
        });
        $(".next-button").on("click", function() {
            window.location.href = "lapor-3.html";
        });   
    }

    if ($("body").attr("id") === "lapor-3") {
        $(".prev-button").on("click", function() {
            window.location.href = "lapor-2.html";
        });
        $(".next-button").on("click", function() {
            window.location.href = "lapor-4.html";
        });   
    }

    if ($("body").attr("id") === "lapor-4") {
        $(".prev-button").on("click", function() {
            window.location.href = "lapor-3.html";
        });

        var modal = $("#laporModal");
        var btn = $(".submit-button");
        var span = $(".close");
        var kembaliButton = $("#kembaliButton");

        btn.on('click', function(event) {
            event.preventDefault();
            modal.show();
        });

        span.on('click', function() {
            modal.hide();
        });

        kembaliButton.on('click', function() {
            window.location.href = "home.html";
        });

        $(window).on('click', function(event) {
            if ($(event.target).is(modal)) {
                modal.hide();
            }
        });
    }
});