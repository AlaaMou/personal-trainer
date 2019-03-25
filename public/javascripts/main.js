$(document).ready(function(){
	// animation for name
		$(window).on("load",function(){
		$("#name").animate({"letter-spacing":"2"},1000);
		$("#name").animate({'lineHeight': "+1.5em"})
       })
    // animation for achivements cards
       $(".achievement").hover(function(){
           $(this).toggleClass("hover-effect")
       })
})

