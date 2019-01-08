$(document).ready(function () {

		
		date = new Date();

		var d = moment(date).format("dddd,MMMM Do YYYY")
		var startdate = moment().subtract(1, "days").format("dddd,MMMM Do YYYY");

		$(".postDate").html(d)
		$(".postDate2").html(startdate)

		$('.bxslider').bxSlider({
		  auto: true,
		  autoControls: true,
		  stopAutoOnClick: true,
		  pager: true,
		  responsive: true,
		});


	$("#change-theme div").click(function () {
		if(this.id == "to-green"){
			$("#themes").attr("href","green.css")
		}
		else if(this.id == "to-blue"){
			 $("#themes").attr("href","blue.css")
		}
		else if(this.id == "to-red"){
			 $("#themes").attr("href","red.css")
		}

	})

	$(".goUp").click(function (e) {
		e.preventDefault();

		$("html,body").animate({
			scrollTop: 0
		},500)
	})

$(".modais").iziModal({ history: false,  fullscreen: true, loop: true, zindex: 99999, focusInput: true });


})

