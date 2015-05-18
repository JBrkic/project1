$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});

});

$(document).ready(function() {
	$("header h1, h2, input").addClass('header-transform');
	$(".header-text").addClass('header-background');

	var  mn = $("nav");
	mns = "main-nav-scrolled";
	hdr = $('header').height();

	$(window).scroll(function() {
		if( $(this).scrollTop() > hdr - 50 ) {
			mn.addClass(mns);
			$('header').addClass("header-scrolled");
		} else {
			mn.removeClass(mns);
			$('header').removeClass("header-scrolled");
		};
	});
});

document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
	this.classList.toggle( "active" );
	$("nav ul").toggleClass( "nav-active" );
	$("nav ul li a").toggleClass( "nav-active-a" );
});