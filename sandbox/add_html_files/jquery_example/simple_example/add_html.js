$(document).ready(function() {
    $('#nav-container').load('header.html #nav');
    setTimeout(function(){
        var elem = $('a[href="' + this.location.pathname + '"]');
        elem.addClass('active');
    }, 10);
});