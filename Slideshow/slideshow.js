$(function(){
	
	$("#slider").addClass("style");
	$("#list").addClass("list")
	
	var index = 0;
	function animate(){
		
        if(index == 0){
			
            $("#img1").fadeOut(1000, function(){
			$("#1").removeClass("widget");
				});
            $("#img2").fadeIn(1000, function(){
			$("#2").addClass("widget");
				});
        }
        else if(index == 1){
            $("#img2").fadeOut(1000, function(){
			$("#2").removeClass("widget");
				});
            $("#img3").fadeIn(1000, function(){
			$("#3").addClass("widget");
				});
        }
        else if(index == 2){
            $("#img3").fadeOut(1000, function(){
			$("#3").removeClass("widget");
				});
            $("#img4").fadeIn(1000, function(){
			$("#4").addClass("widget");
				});
        		}
        else if(index == 3){
            $("#img4").fadeOut(1000, function(){
			$("#4").removeClass("widget");
				});
            $("#img5").fadeIn(1000, function(){
			$("#5").addClass("widget");
				});
        }
        else if(index == 4){
            $("#img5").fadeOut(1000, function(){
			$("#5").removeClass("widget");
				});
            $("#img1").fadeIn(1000, function(){
			$("#1").addClass("widget");
				});
        }

        if(index == 4) index = 0;
        else index++;
    }

    var animateInterval = setInterval(animate, 5000);
    animate();
	
	
	
	
	
})