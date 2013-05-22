/**
 * Use javacripty tab switching when possible.
 *  - Stop tabs from loading a new page.
 */

jQuery(document).ready(function () {

    // For now - targeting ID of tabs on a specific page rather than targeting
    // the generic class 'nav-tabs'.
    
    jQuery( ".nav-tabs li a" ).attr( 'href', function(index,attr) {
	
	// Does the start of the href indicate an internal path?
	if ( attr.charAt(0) == '/' )
	{
	    // Get the last element in the href path
	    id = attr
		.split('/')                        // split in to path elements
		.filter(function(x){return x!=""}) // discard empty elements
		.slice(-1)[0];                     // get final element

	    // Return an ID based on the last element in the path.
	    // This must match the id for the div that wraps the relevant content.
	    return '#' + id;
	}
	else { // href contains an anchor or an external path
	    return attr;
	}
    });

});
