(function() {
    var cx = '006870383000897450398:jgjeb1eczvq';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();

// ref.: https://www.w3schools.com/howto/howto_html_include.asp
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain attribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}

/*
// TODO/NOTE: $(document).ready important
// ref.: https://stackoverflow.com/a/27155910
// TODO/NOTE: Not pure JavaScript, since it is using JQuery with $(document)
// You could remove the $(document).ready function and make sure the JavaScript is loaded at then end of <body>
$(document).ready(function(){
    var menu = document.querySelectorAll('.menu li a');
    for (var i = menu.length - 1; i >= 0; i--) {
        if (menu[i].href==document.URL) {
            // TODO/NOTE: remove all classes, and then set one class, ref.: https://stackoverflow.com/a/27155910
            // menu[i].setAttribute("class", "active");
            menu[i].classList.add("active");
        }
    };
});
*/

// TODO/NOTE: with jQuery, ref.: https://stackoverflow.com/a/27155910
//$(document).ready(function(){
/*
    $('.menu li a').on('click', function(event) {
        event.preventDefault();
        $('.menu li a').each(function() {
            if ($(this).attr('href')==location.pathname) {
                // TODO: why [0] on $(this)[0]?
                if ($(this)[0].className.search("dropdown-item") == 0) {
                    // TODO: if URL=http://localhost/p/projects/projects.html, make sure this if is note executed
                    // TODO/NOTE: old code using parentNode twice
                    //this.parentNode.parentNode.classList.add('active');
                    $('#li_dropdown')[0].classList.add('active');
                }
                // TODO/NOTE: replaced $(this) with this unlike in the answer
                $(this)[0].classList.add('active');
            }
            // If URL=https://raul23.github.io/ [root]
            if (location.pathname=="/")
                $('#home_link')[0].classList.add('active');
        });
    });
*/
//});

$(window).on("load", function() {
    $('li.active').removeClass('active');
    $('a[href="' + location.pathname + '"]').closest('li').addClass('active');
});

includeHTML();