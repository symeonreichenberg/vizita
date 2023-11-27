var $document = $(document), $nav = $('#mainNav'), $logoNav = $('#logoNav');
$document.scroll(function() {
	if ($document.scrollTop() >= 200) {
		$nav.addClass('bg-white');
		$logoNav.removeClass('d-none');
	} else {
		$nav.removeClass('bg-white');
		$logoNav.addClass('d-none');
	}
});
function closeMenu() {
	var menu = document.getElementById("menu");
	menu.classList.remove("show");
};