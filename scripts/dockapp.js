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
var dialog_config = {
	width: 670,
	closeText: 'fechar',
	title: 'navegando por aí',
	position: 'top',
	show: 'blind',
};
$(document).ready(function(){
	//LoadItemsIn($("div.fisheye-container"));
	$('.fisheye-menu').Fisheye($FishEye.config);
	$("a#nav").click(function(){
		$("#containerWindow").load('popup.html');
		$.get(
			"popup.html", 
			function(data){
				//window.alert(data);
				$("#containerWindow").html(data);
				$("#containerWindow").dialog(dialog_config);
			}, 
			"text"
		);
	});
});
