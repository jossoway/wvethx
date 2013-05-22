/**
 * Register visits to the thankyou notifications tab.
 */

jQuery(document).ready( function() {

    jQuery( 'a.notifications' ).click( function() {
	jQuery.post(
	    'http://' + window.location.hostname + '/visit/thankyou-notifications',
	    'visit',
	    function(data, textStatus, jqXHR) { /*console.debug(arguments)*/ },
	    'text'
	);
	
    } );

} );
