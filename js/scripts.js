(function ($) {
	const vapp = new Vue({
		el: "#app",
		data: {
			team: [
				{ name: "Uthsho", detail: "Founder", avatar: "./images/uthsho.gif" },
				{ name: "chrissch_dhil.dev", detail: "Lead Developer In-charge", avatar: "./images/chrissch.png" },
				{ name: "\"Shimeji\" Rin", detail: "Acting Lead Developer", avatar: "./images/rin.png" },
				{ name: "Aniket", detail: "Bot Developer", avatar: "./images/aniket.png" }
			],
		},
	});

	fetch("https://galaxies.silentjungle.tk/devteam")
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			vapp.team = data;
			console.log(data)
		});

	// Preloader
	$(window).on("load", function () {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $(".spinner-wrapper");
			setTimeout(function () {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});

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
			$("html, body")
				.stop()
				.animate(
					{
						scrollTop: $($anchor.attr("href")).offset().top,
					},
					600,
					"easeInOutExpo"
				);
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
