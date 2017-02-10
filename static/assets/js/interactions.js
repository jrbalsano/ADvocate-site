$(document).ready(function() {
	$('#search').focus();
	$('.activate-group').click(function() {
		$('.tabs-header li').removeClass('active');
		$('.tabs-group li').hide();
		$('.details-tab').addClass('active');
		$('.details-panel').show();
		$('.ad-details').slideUp();
		$('.result-group').removeClass('dropshadow');
		$(this).parent().addClass('dropshadow');
		$(this).siblings('.ad-details').slideDown();
	});
	$('.tabs-header li').click(function() {
		$('.tabs-header li').removeClass('active');
		$(this).addClass('active');
	});
	$('.details-tab').click(function() {
		$('.tabs-group li').hide();
		$('.details-panel').show()
	});
	$('.involved-tab').click(function() {
		$('.tabs-group li').hide();
		$('.involved-panel').show()
	});
})