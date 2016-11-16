// 1.When user opens the site in the browser hide .hCard, vCard, .imgTitle
/* done in css: .hero{
	display:none;
}
*/

// 2.When user hovers .heroLeft show  .heroLeft h3
// 3.When user hovers .heroRight show  .heroright h3

/*  done in css:
.image-wrapper:hover .content {
  opacity: 1;
}
*/

// 4.When user cliks on .heroLeft:
/*	- hide h3
	- hide .heroLeft
	- hide .heroRight
	- hide .hero
- show (expand) hCard
*/

$(document).ready(function(){

$(".heroLeft").on('click',function () {
	$(".hero").hide();	
	$(".hCard").fadeIn(350);	
	
});
});

// 5. When .cards is open:

/* When the user clicks the x icon - class .close the hCard fades out*/
$('.close').on('click', function () {
	$('.hCard').fadeOut('fast');
	// Type code related to event here! :)
	
});

// - when user clicks hCard button go to page "Wilderness".
// - when user clicks on x icon colapse .cards.





//6.When user cliks on .heroRight:
//		-hide h3
//		-show (expand) vCard
// $('heroRight').on('click', function () {
// 	$('h3').hide();
// 	$('vCard').fadeIn(350);	
// });


	











