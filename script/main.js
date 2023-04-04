

// 

document.getElementById('help__bg').setAttribute('draggable', false);


let vid = document.getElementById("myVideo"); 

$(".play__pause1").hide();



let opened = false;

$('.play__video1').click(function() {
   if(opened == false) {
		vid.play(); 
		$(".play__pause1").show();
		$(".play__play1").hide();
		$(".dog__cover1").hide();
	   
		opened = true;
   } else{
		vid.pause(); 
		$(".play__pause1").hide();
		$(".play__play1").show();
		opened = false;

   }
});

$(".video-mask1").mouseenter(function () { 
	$(".play__video1").show();

	
});



$(".video-mask1").mouseleave(function () { 
	$(".play__video1").hide();
});




let vid2 = document.getElementById("myVideo2"); 
$(".play__pause2").hide();

let opened2 = false;

$('.play__video2').click(function() {
   if(opened2 == false) {
		vid2.play(); 
		$(".play__pause2").show();
		$(".play__play2").hide();
		$(".dog__cover2").hide();
	   
		opened2 = true;
   } else{
		vid2.pause(); 
		$(".play__pause2").hide();
		$(".play__play2").show();
		opened2 = false;

   }
});

$(".video-mask2").mouseenter(function () { 
	$(".play__video2").show();

	
});


$(".video-mask2").mouseleave(function () { 
	$(".play__video2").hide();
});

