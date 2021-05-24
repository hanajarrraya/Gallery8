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
audios=[
{src:"song.mp3",
category:"fun"},
{src:"relax.mp3",
category:"relax"},
{src:"cardio.mp3",
category:"sport"}
]
var pathAudios="C:/Users/ASUS/Documents/cohort14/Gallery8/auds/"
var counter=0;
function createCard(image){
console.log("I am in createCard")
	
	
	$("#images").append('<div id=' + "image" + counter+' class="gallery"></div>')

	$("#image"+counter).append('<a id=' + counter+' target="_blank" href='+image.src+'>')
	
	$("#"+counter).append("<img src="+image.src+'width="600" height="400">')

	$("#image"+counter).append('<div class="desc">'+image.description+'</div>')
	$("#image"+counter).append('<button id='+"btndelete"+counter+'>delete</button>')
	$("#btndelete"+counter).click(function() {
		 console.log("jajajaj" , image.src)
		 var r = confirm("Are you sure to delete this book!\nEither OK or Cancel.\n");
	  if (r == true) {
		 for(var i = 0 ; i < images.length ; i++){
		 	if(images[i].src === image.src){
		 		images.splice(i,1) 
		 		alert("deleted")
		 		renderImages()
		 		return;
		 	}
		 }
		}
	})
	counter++;
}
function renderImages(){
	
	$("#images").html("")
	
    //getMyStockage();
    
	for (var i =0;i<images.length;i++){ //7
		createCard(images[i]);
	}
	$("#images").show();
}
function addButton(event){
	event.preventDefault();
	var image={}
	image["src"]=$("#srcImage").val()
	image["description"]=$("#decription").val()
	image['category']=$("#categoryImage").val()
	
	images.push(image);
	//console.log(books)
	//setMyStockage();
	renderImages();
	
     
	return;
	
	
}

$('#add').click(addButton)

renderImages();

