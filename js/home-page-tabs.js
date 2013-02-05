/**
 * Remove tabs altogether on home page when viewed on medium+ screens
 */

jQuery(document).ready(function () {

    var width = jQuery( "body" ).width();
    // console.debug( width );

    if ( width >= 768 ) {
	
	jQuery( "#tabcontent > div" )
    	    .removeClass( "fade" )
	    .removeClass( "tab-pane" )
	    .addClass( "side-by-side" )
	;

	jQuery( "#signinsignuptab" )
	    .removeClass( "nav-tabs" )
	    .removeClass( "nav" )
	    .addClass( "side-by-side" )
	;
    }
    
} );

