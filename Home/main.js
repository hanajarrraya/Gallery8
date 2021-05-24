images=[
{src:"https://images.unsplash.com/photo-1603382585507-45205571d760?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",

description:"It is montains",

category:"nature"},
{src:"https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80",

description:"It is bird",

category:"nature"},
{src:"https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

description:"it is flowers",

category:"nature"}
]
favouriteImages=[
]
videos=[
{src:"https://www.youtube.com/embed/tgbNymZ7vqY",
category:"fun"},
{src:"https://www.youtube.com/embed/v=gM2Vkfeh1eA&t=50s",
category:"famous show"},
{src:"https://www.youtube.com/embed/v=Zn_lFpyPQDo",
category:"TeDEX"}
]
var counter=0;
function createCard(image){
console.log("I am in createCard")
	
	
	$("#ImagesDiv").append('<div id=' + "image" + counter+' class="gallery"></div>')

	$("#image"+counter).append('<a id=' + counter+' target="_blank">')
	
	$("#"+counter).append("<img src="+image.src+'width="600" height="400">')
	
	counter++;
}
function renderImages(){
	
	$("#ImagesDiv").html("")
	
    //getMyStockage();
    
	for (var i =0;i<images.length;i++){ //7
		createCard(images[i]);
	}
	$("#ImagesDiv").show();
}
function createVideo(video){
console.log("I am in createCard")
	
	
	$("#VideosDiv").append('<iframe width="250" height="350" src='+video.src+'></iframe>')


}
function renderVideos(){
	
	$("#VideosDiv").html("")
	
    //getMyStockage();
    
	for (var i =0;i<videos.length;i++){ //5
		createVideo(videos[i]);
	}
	$("#VideosDiv").show();
}

renderImages();
renderVideos();
