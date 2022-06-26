/*
 * slideShow.js
 * next 버튼 클릭하면 뒤로 이동
 * prev 버튼 클릭하면 앞으로 이동 
*/
 
$(document).ready(function() {
	// 이동한 이미지의 index 값 저장(현재 위치)
	var movedIndex = 0;
	
	// 슬라이드 패널을 움직이는 함수
	function moveSlide(index) {
		// 전달 받은 index 값을 movedIndex에 저장
		movedIndex = index;
		
		// 슬라이드 이동
		var moveLeft = -(index * 800);		// 왼쪽으로 이동 거리
		$('#slidePanel').animate({'left':moveLeft}, 'slow');
	}
	
	
	var randomNumber = Math.floor(Math.random() * 5);
	moveSlide(randomNumber);
	
	// 각 컨트롤 버튼에 대해 처리
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