#! /usr/bin/env python
#-*-coding: utf-8 -*-
html_out = """
<div class='fisheye-menu'>
	<div class='fisheye-container'>
		<a class='apresentacao_unidade' href='podcast-%s.mp3'></a>
		<a class='livro_texto' href='#link_to:livro'></a>
		<a class='audio_book' href='#livro-text-%s.mp3'></a>
		<a class='ebook' href='#link_to:e-book'></a>
		<a class='navegando_por_ai' href='#'>
			[dl class='links']
				[dt]Lorem Ipsum[/di]
				[dd][a href='www.lipsum.com' target='_blank']www.lipsum.com[/a][/dd]
				[dt]Google[/di]
				[dd][a href='www.google.com' target='_blank']www.google.com[/a][/dd]
				[dt]Wikipédia em Português[/di]
				[dd][a href='pt.wikipedia.org' target='_blank']pt.wikipeadi.org/[/a][/dd]
			[/dl]
			[ul]
				[li][strong]Termo 1:[/strong] Descrição[/li]
				[li][strong]Termo 2:[/strong] Descrição[/li]
				[li][strong]Termo 3:[/strong] Descrição[/li]
				[li][strong]Termo 4:[/strong] Descrição[/li]
			[/ul]
		</a>
		<a class='recursos_multimidia' href='#link_to:multimídia'></a>
	</div>
</div>
"""

print "############ Sociedade Tecnologia e Inovação  ###################"
n = 1
while(n <= 19):
	print "====== AULA %d  cole este código no editor html ======" % n
	name = "sti-%d" % n
	if(n == 10):
		n += 1
	print html_out % (name, name)
	print "=================== FIM DA AULA %d  ===================" % n
	n += 1

print "############ Informática aplicada a gestão  ###################"
n = 1
while(n <= 19):
	print "====== AULA %d  cole este código no editor html ======" % n
	name = "iag-%d" % n
	if(n == 10):
		n += 1
	print html_out % (name, name)
	print "=================== FIM DA AULA %d  ===================" % n
	n += 1

print "############ Gestão de Marketing  ###################"
n = 1
while(n <= 19):
	print "====== AULA %d  cole este código no editor html ======" % n
	name = "gmk-%d" % n
	if(n == 10):
		n += 1
	print html_out % (name, name)
	print "=================== FIM DA AULA %d  ===================" % n
	n += 1
	

print "############ Gestão Ambinetal  ###################"
n = 1
while(n <= 19):
	print "====== AULA %d  cole este código no editor html ======" % n
	name = "ga-%d" % n
	if(n == 10):
		n += 1
	print html_out % (name, name)
	print "=================== FIM DA AULA %d  ===================" % n
	n += 1
