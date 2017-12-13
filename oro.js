var video;
var duration;
var startDuration;
var volume;

window.onload = function(){
	video = document.getElementById("video");
	duration = document.getElementById("ratio");
	volume = document.getElementById("volume");
	duration.value = 0;
	duration.min = 0;
	duration.max = video.duration;

}

function PlayPauseVideo(){
	if (video.paused){
		video.play();
		startDuration = setInterval(initDuration,1000/66);
	}
	else{
		video.pause();
		clearInterval(startDuration);
	}
}

//dlya plavnosti gromkosti
function changeVolume(){
video.volume = volume.value/100;
}

function fullScreen(){
	video.webkitEnterFullScreen();

}

function initDuration(){
	duration.value = video.currentTime;
}
//peremeshenie polzunka ( u menya i bez etogo peremeshalsa)
function clearAnimateRange(){
	clearInterval(startDuration);
	PlayPauseVideo();
}

function movedRange(){
	video.currentTime = duration.value;
	if(video.paused){
	PlayPauseVideo();
	}

}