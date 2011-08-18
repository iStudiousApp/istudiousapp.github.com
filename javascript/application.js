// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// Extend jQuery functionality to support prettify as a prettify() method.
jQuery.fn.prettify = function () { 
  this.html(prettyPrintOne(this.html())); };

$(document).ready(function(){
  
  $.facebox.settings.closeImage = '/stylesheets/images/closelabel.png';
  $.facebox.settings.loadingImage = '/stylesheets/images/loading.gif';

  $('.facebox a').facebox();
  $('#close_facebox').live('click', function(e){
    jQuery(document).trigger('close.facebox');
  });

  jQuery(document).ready(function($) {
	$('a[rel*=facebox]').facebox()
  })
});