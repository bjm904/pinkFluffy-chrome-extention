chrome.runtime.sendMessage("get", function(response){
	if(response.enabled){
		setInterval(function(){
			var video=document.getElementsByTagName('video')[0];
			if(video.src!="https://brycejmeyer.com/files/flufflepuff.mp4"){
				video.src="https://brycejmeyer.com/files/flufflepuff.mp4";
				video.autoplay=true;
				video.loop=true;
			}
		}, 150);
	}
});