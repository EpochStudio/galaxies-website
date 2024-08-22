(function ($) {
	$(window).on("scroll load", function () {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
	});

	$(function () {
			$(document).on("click", "a.page-scroll", function (event) {
				var $anchor = $(this);
				var target = $($anchor.attr("href"));

				if (target.length) {
					$("html, body")
						.stop()
						.animate(
							{
								scrollTop: target.offset().top,
							},
							600,
							"easeInOutExpo"
						);
				} else {
					console.error("Target element not found:", $anchor.attr("href"));
				}
				event.preventDefault();
			});
	});

	$(".navbar-nav li a").on("click", function (event) {
		if (!$(this).parent().hasClass("dropdown")) $(".navbar-collapse").collapse("hide");
	});

	var amountScrolled = 700;
	$(window).scroll(function () {
		if ($(window).scrollTop() > amountScrolled) {
			$("a.back-to-top").fadeIn("500");
		} else {
			$("a.back-to-top").fadeOut("500");
		}
	});

	$(".button, a, button").mouseup(function () {
		$(this).blur();
	});
})(jQuery);
