// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
	$('#mypanel').on ('tap',function(){
		navigator.vibrate(1000);
	});
	
	$('#1').on('tap',function(){
		navigator.vibrate(1000);
	});
	
	$('#2').on ('tap',function(){
		navigator.vibrate(1000);
	});
	
	$('#3').on ('tap',function(){
		navigator.vibrate(1000);
	});
	
	$('#4').on ('tap',function(){
		navigator.vibrate(1000);
	});
	
	$('#5').on ('tap',function(){
		navigator.vibrate(1000);
	});

	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('b1','audio/C.mp3',function(){},function(msg){alert("Error "+msg);});
	audio.preloadFX('b2','audio/D.mp3',function(){},function(msg){alert("Error "+msg);});
	audio.preloadFX('b3','audio/E.mp3',function(){},function(msg){alert("Error "+msg);});
	audio.preloadFX('b4','audio/F.mp3',function(){},function(msg){alert("Error "+msg);});
	audio.preloadFX('b5','audio/C.mp3',function(){},function(msg){alert("Error "+msg);});
	
	
	function quien(q)
		{
			audio.play(q);
			return q.substring(1);
		}
}); 
});

