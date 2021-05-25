
favouriteVideos=[
]
videos=[
{src:"https://www.youtube.com/embed/tgbNymZ7vqY",
description:"It is a comics",
category:"fun"},
{src:"https://www.youtube.com/embed/v=gM2Vkfeh1eA&t=50s",
description:"it is tv show ",
category:"famous show"},
{src:"https://www.youtube.com/embed/v=Zn_lFpyPQDo",
description:"it is experience speaker",
category:"TeDEX"}
]
function setMyStockage(){
	console.log("I am in local storage setting images")
	localStorage.setItem('videos',JSON.stringify(videos));
	
}
function getMyStockage(){
	
	console.log("I am in local storage taking images")
	videos=JSON.parse(localStorage.getItem('videos'))
	
	
}

var counter=0;
function createVideo(video){
   	$("#VideosDiv").append('<div id=' + "video" + counter+' class="gallery"></div>')
	$("#video"+counter).append('<iframe width="300" height="200" src='+video.src+'></iframe>')
	$("#video"+counter).append('<div class="desc">'+video.description+'</div>')
	$("#video"+counter).append('<button id='+"btndelete"+counter+'>delete</div>');

	$("#btndelete"+counter).click(function() {
		console.log("hi")
		 console.log("jajajaj" , video.src)
		 alert("are you sure")
		 var r = confirm("Are you sure to delete this video!\nEither OK or Cancel.\n");
	  if (r == true) {
		 for(var i = 0 ; i < videos.length ; i++){
		 	if(videos[i].src === video.src){
		 		videos.splice(i,1) 
		 		alert("deleted")
		 		renderVideos()
		 		return;
		 	}
		 }
		}
	})
	counter++;
}

function renderVideos(){
	
	$("#VideosDiv").html("")
	
    getMyStockage();
    
	for (var i =0;i<videos.length;i++){ //5
		createVideo(videos[i]);
	}
	$("#VideosDiv").show();
}
function addButton(event){
	event.preventDefault();
	var video={}
	video["src"]=$("#srcVideo").val()
	video["description"]=$("#description").val()
	video['category']=$("#categoryVideo").val()
	console.log("image=",video)
	videos.push(video);
	
	setMyStockage();
	renderVideos();
	
     
	return;
	
	
}

$('#add-btn').click(addButton)
//setMyStockage();
renderVideos();

