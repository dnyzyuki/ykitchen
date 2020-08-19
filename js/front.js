//메인
$(function(){

  Headerfixed();



});

//header fixed
function Headerfixed(){
	var menu = $( 'header' ).offset();
		$( window ).scroll( function() {
			if ( $( document ).scrollTop() > menu.top ) {
				$( 'header' ).addClass( 'fixed' );
			} else {
				$( 'header' ).removeClass( 'fixed' );
			}
	});
}