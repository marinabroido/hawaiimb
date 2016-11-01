// 1.When user opens the site in the browser hide .hCard, vCard, .imgTitle
// 2.When user hovers .heroLeft show  .heroLeft h3
// 3.When user hovers .heroRight show  .heroright h3
// 4.When user cliks on .heroLeft:
//	- hide h3
//	- show (expand) hCard

$('heroLeft').on('click', function () {
	$('h3').hide();
	$('hCard').fadeIn(350);	

	
});
//5.When user cliks on .heroRight:
//		-hide h3
//		-show (expand) vCard
$('heroRight').on('click', function () {
	$('h3').hide();
	$('vCard').fadeIn(350);	
});

//6. When .cards is open:
// - when user clicks hCard button go to page "Wilderness".
// - when user clicks on x icon colapse .cards.
//When user click on page "Wilderness":
//- hide .hero
//- show main.
	