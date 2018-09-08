// DEPRECATED. TODO: Archive function code
/* *************************************************************
 *  Loading js files.
 *  ref.: https://stackoverflow.com/a/24641920
 ************************************************************** */
customPath ='/assets/js/custom/';
distPath ='/dist/js/';
vendorPath='/assets/js/vendor/';

src = [
    {f:'jquery-3.3.1.min.js', path:customPath},
    {f:'popper.min.js', path:vendorPath},
    {f:'bootstrap.min.js', path:distPath},
    {f:'header.js', path:customPath},
    {f:'back_to_top.js', path:customPath}
];

for (var i in src)
{
    document.write('<' + 'script type="text/javascript" src="' + src[i].path + src[i].f + '"></sc' + 'ript>');
}

// If the jQuery CDN loaded didn't work, load jQuery from website's resources folders
window.jQuery || document.write('<script src="/assets/js/vendor/jquery-3.3.1.min.js" type="text/javascript"><\/script>')
