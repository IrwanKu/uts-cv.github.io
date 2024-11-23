// Scroll Animations
$(document).ready(function () {
    // Smooth Scrolling for Navigation
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top - 70,
                },
                800
            );
        }
    });

    // On scroll animation trigger
    $(window).on("scroll", function () {
        $(".timeline-item").each(function () {
            const elementTop = $(this).offset().top;
            const viewportBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < viewportBottom - 100) {
                $(this).addClass("animate");
            }
        });
    });
});
