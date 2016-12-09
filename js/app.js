$(function(){

	var $screenSize = $(window).width();
	var $firstLine = $('body').find('.firstLine').find('.designInspiration');
	var $secondLine = $('body').find('.secondLine').find('.designInspiration');

	if( $screenSize >=401 && $screenSize <=769){
		
		$firstLine.toggleClass('hide')
		$secondLine.toggleClass('hide')

	}






});
