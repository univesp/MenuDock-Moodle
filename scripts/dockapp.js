/// Moodle FisheEye Menu

/// jQuery pluguin
var $FishEye = {
	config : {
		maxWidth: 70,
		items: 'a',
		itemsText: 'span',
		container: '.fisheye-container',
		itemWidth: 70,
		proximity: 90,
		halign : 'center'
	}
};

var $DATA = {
	items : [
		{label:"Apresentação da Unidade", icon: "apresentacao.png"},
		{label:"Livro texto", icon: "livro-texto.png"},
		{label:"Áudio book", icon: "audio-book.png"},
		{label:"Navegando por aí", icon: "navegando-por-ai.png"},
		{label:"Recurso multimídia", icon: "recursos-multimidia.png"},
	]
};

$(document).ready(function(){
	//LoadItemsIn($("div.fisheye-container"));
	$('#menuFishEye').Fisheye($FishEye.config);
});

/*
function LoadItemsIn( $jQueryContainer ){
	var Items = "";
	
	for(var item in $DATA.items){
		console.log("Loading "+ $DATA.items[item].label +" ...");
		Items += "<a href='#'><span class='fisheye-menu-item-label'>"+ $DATA.items[item].label +"</span><img src='imagens/"+ $DATA.items[item].icon +"' alt='' /></a>";
	}
	
	$jQueryContainer.html( Items );
}
*/
