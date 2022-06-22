

$(document).ready(function(){
	
	$('#tapMenu li').on('click',function(){
		var index = $(this).index();
		
		$('#tapMenu li a').not(index).attr('class','nav-link');
		$('#tapMenu li a').eq(index).attr('class','nav-link active');
		
		
	});
	
		
});