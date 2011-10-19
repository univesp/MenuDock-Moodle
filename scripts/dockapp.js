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
/*
var $DATA = {
	items : [
		{label:"Apresentação da Unidade", icon: "apresentacao.png"},
		{label:"Livro texto", icon: "livro-texto.png"},
		{label:"Áudio book", icon: "audio-book.png"},
		{label:"Navegando por aí", icon: "navegando-por-ai.png"},
		{label:"Recurso multimídia", icon: "recursos-multimidia.png"},
	]
};
*/
$(document).ready(function(){
	//LoadItemsIn($("div.fisheye-container"));
	$('.fisheye-menu').Fisheye($FishEye.config);
});
