$(function(){
	initMenu("div.fisheye-menu");	
	//$("div.fisheye_menu").Fisheye(config);
	$("div.fisheye-menu").Fisheye({
		maxWidth: 70,
		items: 'a',
		itemsText: 'span',
		container: '.fisheye-container',
		itemWidth: 70,
		proximity: 90,
		halign : 'center'
	});
});
function MostrarPopup(id){$("#navegando"+id).dialog({
	width: 670,
	closeText: 'fechar',
	title: 'navegando por aí',
	position: 'top',
	show: 'blind',
});}
function replaceAll(string, token, newtoken) {while (string.indexOf(token) != -1) {string = string.replace(token, newtoken);} return string;}

function initMenu(selector){

	var DOM_apresentacao_da_unidade = selector + " a.apresentacao_unidade";
	var DOM_livro_texto = selector + " a.livro_texto";
	var DOM_audio_book = selector + " a.audio_book";
	var DOM_ebook = selector + " a.ebook";
	var DOM_navegando_por_ai = selector + " a.navegando_por_ai";
	var DOM_recursos_multimidia = selector + " a.recursos_multimidia";
		
	var simple_item = [
		DOM_apresentacao_da_unidade, 
		DOM_livro_texto,
		DOM_audio_book,
		DOM_ebook,
		DOM_navegando_por_ai,
		DOM_recursos_multimidia
	];
	var elements = [];
	
	$.each(simple_item, function(k,v){
		$.makeArray( $(v) );
		elements.push($.makeArray($(v)));
		
	});
	build_item( elements );
}
function build_item(items){
	$.each(items, function(n, doms){
		$.each(doms, function(key, value){
			var IMAGES_PATH = 'imagens';
			tag = "\n\t<span class='fisheye-menu-item-label'>";
			if($(value).attr("class") == "apresentacao_unidade") {
				$(value).attr("id", "apresentacao_da_unidade"+key);
				tag += "Apresentação da Unidade</span>";
				tag += "\n\t\t<img src='"+IMAGES_PATH+"/apresentacao.png' />";
			}
			else if($(value).attr("class") == "livro_texto"){
				$(value).attr("id", "livro_texto"+key);
				tag += "Livro texto</span>";
				tag += "\n\t\t<img src='"+IMAGES_PATH+"/livro-texto.png' />";
			}
			else if($(value).attr("class") == "audio_book"){
				$(value).attr("id", "aaudio_book"+key);
				tag += "Áudio book</span>";
				tag += "\n\t\t<img src='"+IMAGES_PATH+"/audio-book.png' />";
			}
			else if($(value).attr("class") == "ebook"){
				$(value).attr("id", "ebook"+key);
				tag += "eBook</span>";
				tag += "\n\t\t<img src='"+IMAGES_PATH+"/ebook.png' />";
			}
			else if($(value).attr("class") == "recursos_multimidia"){
				$(value).attr("id", "recurso_multimidia"+key);
				tag += "Recursos multimídia</span>";
				tag += "\n\t\t<img src='"+IMAGES_PATH+"/recursos-multimidia.png' />";
			}
			else if($(value).attr("class") == "navegando_por_ai"){
				$(value).attr("id", "navegando"+key);
				tag += "Navegando por aí</span>";
				tag += "\n\t\t<img src='"+IMAGES_PATH+"/navegando-por-ai.png' onclick='javascript:MostrarPopup("+key+");return false;'/>";
				html = replaceAll(replaceAll($(value).html(), "[", "<"), "]", ">");
				popup = "<div id='navegando"+key+"'>"+ html +"</div>";
				$("div#popups").html(popup);
			}
			$(value).html("").append(tag);
		});
	});
}
