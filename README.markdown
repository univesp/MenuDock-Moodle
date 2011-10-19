# MoodleDock
Menu dock para moodle. Módulo específico.


## Modo de usar
- Colocar o arquivo dockapp.js na pasta de javascripts.
- Inserir o include do arquivo dockapp.js na página onde o menu será inserido.
- Colocar o trecho de código da div#menuFishEye.fisheye-menu no seui html efetuadno as devidas mundaças nos links:
	<code>
		<pre>
		<div class="fisheye-menu" id="menuFishEye">
			<div class='fisheye-container'>
				<a href='#'><span class='fisheye-menu-item-label'>Apresentação da Unidade</span><img src="imagens/apresentacao.png" alt="" /></a>
				<a href='#'><span class='fisheye-menu-item-label'>Livro texto</span><img src="imagens/livro-texto.png" alt="" /></a>
				<a href='#'><span class='fisheye-menu-item-label'>Audio book</span><img src="imagens/audio-book.png" alt="" /></a>
				<a href='#'><span class='fisheye-menu-item-label'>Navegando por ai</span><img src="imagens/navegando-por-ai.png" alt="" /></a>
				<a href='#'><span class='fisheye-menu-item-label'>Recursos multimídia</span><img src="imagens/recursos-multimidia.png" alt="" /></a>
			</div>
		</div>
		<pre>
	</code>
