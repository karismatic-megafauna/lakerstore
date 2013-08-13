$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
    // Enable Scrolling
    touchOverflowEnabled: true,
    touchOverflow: true,
    // Enable CORS
    allowCrossDomainPages: true
    // Enable AJAX
    // ajaxEnabled: false
  });
});

// Enable Debugging
// $.support.cors = true;
// $.support.touchOverflow = true;