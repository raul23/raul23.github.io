/* Back to top arrow
ref.: https://bit.ly/2oThj8Y (How To Add Back To Top Button In Blogger)
ref.: https://www.scrolltotop.com/ (Icon)
*/
jQuery(window).ready(function () {
    var offset = 800;
    var duration = 500;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    jQuery('.back-to-top').click(function (event) {
        event.preventDefault();
        // Next lines sometimes adds # at the end of URL and you end up at the top of the page
        // jQuery('html, body').animate({scrollTop: $("#scroll-here").offset().top}, duration);
        // Reference for next line: https://stackoverflow.com/a/56687659
        // document.getElementById("scroll-here").scrollIntoView( {behavior: "smooth" })
        // $([document.documentElement, document.body]).animate({scrollTop: $("#scroll-here").offset().top}, duration);
        // jQuery('html, body').stop().animate({scrollTop: $("#scroll-here").offset().top}, duration);
        const mq = window.matchMedia( "(min-width: 577px)" );
        if (mq.matches) {
            // console.log("window width > 576px");
            jQuery('html, body').animate({scrollTop: parseInt($("#scroll-here").offset().top)}, duration);
        } else {
            // console.log("window width <= 576px");
            jQuery('html, body').animate({scrollTop: 0}, duration);
        }
        return false;
    });
});
