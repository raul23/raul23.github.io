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
$(document).ready(function(){
    $('.menu li a').each(function() {
        if ($(this).attr('href')==location.pathname){
            // TODO/NOTE: replaced $(this) with this unlike in the answer
            this.classList.add('active');
        }
    });
});
includeHTML();