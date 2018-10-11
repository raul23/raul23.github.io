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
                if (this.readyState === 4) {
                    if (this.status === 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status === 404) {elmnt.innerHTML = "Page not found.";}
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}

/* Highlights the correct item in the dropdown menu from the navbar */
setTimeout(function(){
    if (this.location.pathname==="/")
        $('#home_link').addClass('active');
    else {
        var elem = $('a[href="' + this.location.pathname + '"]');
        if (this.location.pathname === "/p/projects/dev-jobs-insights.html"){
            elem = $('#item-submenu');
            $('#li_dropdown').addClass('active');
            elem.addClass('active');
        }
        else if (elem[0].className.search("dropdown-item") === 0) {
            $('#li_dropdown').addClass('active');
            elem.addClass('active');
        }
        else
            elem.parent().addClass('active');

    }
}, 200);

includeHTML();