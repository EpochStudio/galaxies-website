(function ($) {
	const vapp = new Vue({
		el: "#app",
		data: {
			team: [
				{ name: "Uthsho", detail: "Founder", avatar: "https://cdn.discordapp.com/avatars/747870498221719592/a_ec11c86942d7d03147864c24880165ab.gif?size=4096" },
				{ name: "chrissch_dhil.dev", detail: "Lead Developer
					Project Director", avatar: "https://cdn.discordapp.com/avatars/592663451978039298/b5ace6ed0d2a2f4b07ba9a207c4e6f76.png?size=4096" },
				{ name: "oBrent", detail: "Web Developer", avatar: "https://cdn.discordapp.com/avatars/718489111765319692/52492c9631e68fe6902257ec664750c9.png?size=4096" },
				{ name: "\"Shimeji\" Rin", detail: "Bot Developer", avatar: "https://cdn.discordapp.com/avatars/586913853804249090/a_81ed93fe08e29db876f0bbfbc67abd1e.gif?size=4096" },
				{ name: "Aniket", detail: "Bot Developer", avatar: "https://cdn.discordapp.com/avatars/474255126228500480/122498b2abd7493fc075b249aef72dc7.png?size=4096" }
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
