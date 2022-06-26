/*
 * slideShow.js
 * next 버튼 클릭하면 뒤로 이동
 * prev 버튼 클릭하면 앞으로 이동 
*/
 
$(document).ready(function() {
	
	var movedIndex = 0;
	

	function moveSlide(index) {
		movedIndex = index;
		
		var moveLeft = -(index * 800);		
		$('#slidePanel').animate({'left':moveLeft}, 'slow');
	}
	
	
	var randomNumber = Math.floor(Math.random() * 5);
	moveSlide(randomNumber);
	
	
	$('.controlButton').each(function(index) {
		$(this).hover(
			function() {
				$(this).attr('src', 'image/controlButton2.png');
			},
			function() {
				$(this).attr('src', 'image/controlButton1.png');
			}
		);
		
		// 클릭했을 때 인덱스값을 moveSlide() 함수에게 전달
		$(this).on('click', function() {
			moveSlide(index);	
		});
	});
}); 