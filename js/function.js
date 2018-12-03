$(document).ready(function () {
	date = new Date();

	var d = moment(date).format("dddd,MMMM Do YYYY")
	console.log(d)
	$(".postDate").html(d)
})