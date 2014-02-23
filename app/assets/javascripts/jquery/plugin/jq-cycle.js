jQuery( function() {
    jQuery( '#jquery-cycle' ) . cycle( {
        fx: 'scrollHorz',
        speed: 1000, 
        timeout: 0,
        sync: 1,
        next: '#jquery-cycle-next',
        prev: '#jquery-cycle-prev'
    } );
} );

