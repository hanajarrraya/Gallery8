
favouriteAudios=[
]
audios=[
{src:"C:/Users/ASUS/Documents/cohort14/Gallery8/auds/song.mp3",
description:"it is about songs",
category:"fun"},
{src:"C:/Users/ASUS/Documents/cohort14/Gallery8/auds/relax.mp3",
description:"it is to sleep and enjoy cool music",
category:"relax"},
{src:"C:/Users/ASUS/Documents/cohort14/Gallery8/auds/cardio.mp3",
description:"it is time to exercice",
category:"sport"}
]

function setMyStockage(){
	console.log("I am in local storage setting images")
	localStorage.setItem('audios',JSON.stringify(audios));
	
}
function getMyStockage(){
	
	console.log("I am in local storage taking images")
	audios=JSON.parse(localStorage.getItem('audios'))
	
	
}

var counter=0;
function createAudio(audio){
	// $("#AudiosDiv").append('<audio controls><source  src='+pathAudios+audio.src+'></audio>')
   	$("#AudiosDiv").append('<div id=' + "audio" + counter+' class="gallery"></div>')
   	$("#audio"+counter).append('<audio controls><source  id="src" src='+audio.src+'></audio>')
	
	$("#audio"+counter).append('<div class="desc">'+audio.description+'</div>')
	$("#audio"+counter).append('<button id='+"btndelete"+counter+'>delete</div>');

	$("#btndelete"+counter).click(function() {
		
		 var r = confirm("Are you sure to delete this video!\nEither OK or Cancel.\n");
	  if (r == true) {
		 for(var i = 0 ; i < audios.length ; i++){
		 	if(audios[i].src === audio.src){
		 		audios.splice(i,1) 
		 		alert("deleted")
		 		renderAudios()
		 		return;
		 	}
		 }
		}
	})
	counter++;
}

function renderAudios(){
	
	$("#AudiosDiv").html("")
	
    //getMyStockage();
    
	for (var i =0;i<audios.length;i++){ //5
		createAudio(audios[i]);
	}
	$("#AudiosDiv").show();
}
function addButton(event){
	event.preventDefault();
	var audio={}
	
	audio["src"]=$("#srcAudio")
	audio["description"]=$("#description").val()
	audio['category']=$("#categoryAudio").val()
	console.log("audio=",audio)
	audios.push(audio);
	
	//setMyStockage();
	renderAudios();
	
     
	return;
	
	
}

$('#add-btn').click(addButton)
//setMyStockage();
renderAudios();

