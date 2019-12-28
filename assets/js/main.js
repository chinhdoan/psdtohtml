


function openSlideMenu(){
      document.getElementById('menu-bar').classList.toggle('active');
      document.getElementById('container').style.marginLeft = '180px';
 }
function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('container').style.marginLeft = '0';
}

$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() != 0) {
			$('#myBtn').fadeIn();
			} 
		else {
			$('#myBtn').fadeOut();
			}
		});
	
		$('#myBtn').click(function() {
		$('body,html').animate({
		scrollTop: 0
		}, 800);
	});
});




 