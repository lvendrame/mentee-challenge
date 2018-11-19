//title primeiro nível = <h1>
//title segundo nível = <h2>
//sections = <section>
//section item = <article>
//description = <p>
//characters = <ul>
//character = <li>
//data = use a criatividade e tente exibir como se fosse um card, onde a imagem deve ficar ao lado esquerdo, todas as demais informações ao lado direito, exceto o about que deve ficar abaixo
//colocar um botão que ao clicar, exiba um form para adição de Pessoas
//o form deve ter campos para adicionar uma nova pessoa a sessão "data", deve ter um botão que ao clicar faça validação dos dados informados, inclua na lista, limpe os campos do form e esconda novamente o form

var initialState = {
	title: "Que bela página",
	sections: [
		{
			type: "cartoon",
			title: "Hora de Aventuras",
			description: "Adventure Time (Hora de Aventura BRA ou Hora de Aventuras POR) é uma série de desenho animado americana criada por Pendleton Ward para o Cartoon Network. A série segue as aventuras de Finn (dublado por Jeremy Shada), um garoto humano aventureiro, e o seu melhor amigo e irmão adotivo Jake (dublado por John DiMaggio), um cão com poderes que lhe permitem alterar a forma e tamanho conforme a sua vontade. Finn e Jake habitam a pós-apocalíptica Terra de Ooo, onde interagem com os outros personagens principais da série: Princesa Jujuba (dublada por Hynden Walch), o Rei Gelado (dublado por Tom Kenny) e Marceline, a Rainha dos Vampiros (dublada por Olivia Olson). Hora de aventura é exibido na Cartoon Network.",
			characters: [
				{name: "Finn", gender:"Masculino"},
				{name: "Jake", gender:"Masculino"},
				{name: "Rein Gelado", gender:"Masculino"},
				{name: "Marceline", gender:"Feminino"},
				{name: "Princesa Chiclete", gender:"Feminino"},
				{name: "BMO", gender:"Computador"}
			]			
		},
		{
			type: "cartoon",
			title: "Bob Esponja",
			description: "SpongeBob SquarePants (conhecido como Bob Esponja Calça Quadrada no Brasil e comumente referida como Bob Esponja) é uma série de animação americana, criada pelo biólogo marinho e animador Stephen Hillenburg, sendo produzida e exibida pela Nickelodeon. A série narra as aventuras e os empreendimentos do personagem-título e de seus diversos amigos na fictícia cidade subaquática de Bikini Bottom (Fenda do Biquíni).",
			characters: [
				{name: "Bob Esponja", gender:"Masculino"},
				{name: "Patrick", gender:"Masculino"},
				{name: "Lula Molusco", gender:"Masculino"},
				{name: "Siriguejo", gender:"Masculino"},
				{name: "Sandy", gender:"Feminino"},
				{name: "Pérola", gender:"Feminino"},
				{name: "Plankton", gender:"Masculino"}
			]
		},
		{			
			type: "data",
			title: "Pessoas muito falsas",
			data: [
					{
						_id: "5be560e2cfc11c401aa090a9",
						name: "Ida Wagner",
						age: 39,
						picture: "http://placehold.it/128x128",
						gender: "female",
						company: "EQUITAX",
						email: "idawagner@equitax.com",
						phone: "+1 (969) 440-2538",
						about: "Proident pariatur nisi mollit ipsum pariatur reprehenderit elit commodo. Id dolor ad eiusmod sint est velit elit quis dolore officia minim qui aliqua duis. Labore eiusmod consequat consequat minim dolore veniam ipsum Lorem mollit sint. Nulla irure irure anim ullamco ad sit.\r\n"
					},
					{
						_id: "5be560e290d77b826dc985e9",
						name: "Katrina Montgomery",
						age: 35,
						picture: "http://placehold.it/128x128",
						gender: "female",
						company: "HOUSEDOWN",
						email: "katrinamontgomery@housedown.com",
						phone: "+1 (876) 433-2451",
						about: "Aliqua quis adipisicing ullamco anim occaecat commodo dolor velit excepteur irure. Et anim quis enim incididunt in incididunt eu duis dolore pariatur consequat. Ad officia aliquip mollit consectetur dolore voluptate pariatur amet. Velit veniam do velit sint et ipsum aute laborum. Proident ut dolore sunt laborum anim incididunt tempor pariatur consequat magna quis proident aute Lorem. Aliquip reprehenderit voluptate nulla esse esse nostrud excepteur.\r\n"
					},
					{
						_id: "5be560e2e8d30159afe14cd5",
						name: "Bush Cunningham",
						age: 38,
						picture: "http://placehold.it/128x128",
						gender: "male",
						company: "PURIA",
						email: "bushcunningham@puria.com",
						phone: "+1 (866) 526-2324",
						about: "Pariatur nostrud magna non occaecat duis nulla sunt. Proident est ullamco non aliqua ex pariatur enim irure eu consectetur eiusmod incididunt sint. Officia culpa consequat velit reprehenderit minim cupidatat ad duis reprehenderit laboris. Proident anim deserunt Lorem aliquip sunt aliquip est dolore do laborum amet occaecat velit. Sint reprehenderit cillum eiusmod consectetur velit eiusmod reprehenderit aliqua duis cillum irure. Excepteur est labore incididunt exercitation commodo ut velit exercitation ex cupidatat fugiat tempor. Occaecat deserunt consectetur in ut officia sit duis culpa excepteur.\r\n"
					},
					{
						_id: "5be560e2750aaaa9f229695f",
						name: "Jenny Snyder",
						age: 27,
						picture: "http://placehold.it/128x128",
						gender: "female",
						company: "PODUNK",
						email: "jennysnyder@podunk.com",
						phone: "+1 (919) 424-2002",
						about: "Nulla ullamco Lorem nulla ex elit elit est. Veniam nulla veniam eiusmod voluptate aute consectetur exercitation nisi incididunt anim. Aute exercitation dolore ex ad velit enim sunt et commodo veniam labore sunt veniam. Quis voluptate commodo quis ex Lorem sint reprehenderit.\r\n"
					},
					{
						_id: "5be560e28cceb0f5c4f1b4c6",
						name: "Mcgee Mckenzie",
						age: 36,
						picture: "http://placehold.it/128x128",
						gender: "male",
						company: "PATHWAYS",
						email: "mcgeemckenzie@pathways.com",
						phone: "+1 (970) 522-3587",
						about: "Laboris enim velit tempor ipsum. Reprehenderit do deserunt aliquip culpa. Aliquip enim exercitation adipisicing id velit est dolore. Nostrud ad occaecat irure excepteur esse ut pariatur eiusmod aliquip ex.\r\n"
					},
					{
						_id: "5be560e28c50605e1569ffbe",
						name: "Leon Rojas",
						age: 28,
						picture: "http://placehold.it/128x128",
						gender: "male",
						company: "PROTODYNE",
						email: "leonrojas@protodyne.com",
						phone: "+1 (824) 596-2376",
						about: "Quis aute pariatur ea nostrud esse irure sit id sit magna. Non est laborum aliqua adipisicing irure do mollit reprehenderit ullamco laboris velit qui. Elit eiusmod exercitation ipsum quis exercitation id nostrud dolor sit ad amet ad ullamco.\r\n"
					}
			]
		}
	]
};