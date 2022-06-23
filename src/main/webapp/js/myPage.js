/**
 * myPage1.html 에서 사용
 */
 
function moveToPage() {

	if ($('#pwdBox').val() == "") {
		alert("비밀번호를 입력해주세요");
		$('#pwdBox').focus();
		return false;
	}

	window.location.href = "myPage2.html";
}

function prevToPage() {
	window.location.href = "index.html";
}