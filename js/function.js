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
		alert("sdsdsa")
	})

})