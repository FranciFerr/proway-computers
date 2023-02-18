*Foi feito um módulo com o seguinte comando "ng g module produtos --route produtos --module app.module".
  Quer dizer que foi feito um modulo(o módulo é um conjunto de arquivos diferente do component. O módulo tem dois arquivos a mais aqui o routing.module e o module, além dos que também vem com o component(css,html,spec e ts)).A rota que vai abrir o module é "produtos"(--route produtos) e também ele é atrelado ao app.module(--module app.module).

  Dentro do arquivo app-routing.module.ts vai estar essa rota de produtos já estanciada automaticamente.

*Foi criado um component chamado "detalhes-produto" dentro do component "produtos" e associado ao módulo "         produtos. module.ts" com o seguinte comando "ng g component produtos/detalhes-produto --module produtos.module".
  Dentro do module já automaticamente foi inserido o nome do novo component. Depois foi inserido o "DetalhesProdutoComponent" no arquivo "produtos-routing.module.ts".

*Foi criado um arquivo de serviço com o seguinte comando "ng g service produtos".

*Foi intalada a biblioteca do Angular "Material Angular" do site "https://material.angular.io/" como o seguinte comando "ng add @angular/material". Nas perguntas foram todas "yes" e no them foi dado enter na primeira opção "Indigo/Pink".
  Depois foi reiniciado o servidor para detectar a instalação da biblioteca
  com o seguinte comando "ng serve --open".
  No arquivo "app.module.ts" foi feito um import do "MatSnackBarModule - https://material.angular.io/guide/getting-started" e também foi chamado em "imports" no mesmo arquivo.
  Após foi feito um arquivo de serviço para aparecer essa bibliteva na aplicação com o seguinte comando "ng g service notificacao".
  Dentro do site tem os exemplos de Snackbar "Que é uma barrinha de notificações".

*Foi criado um modulo como seguinte comando "ng g module carrinho --route carrinho --module app.module

*Foi criado um modulo chamado "contato" com o seguinte comando "ng g module contato --route contato --module app.module".

*Foi feito o build do projeto com o seguinte comando "ng build --base-href="https://nome-susuario-github.github.io/proway-computers/" e no arquivo "angular.json" em "option -> outpth" foi mudado para "docs".A o roda o comando foi criada a pasta "docs" e colocados todos os arquivos do projeto nela automaticamente.

*Foi feito novamente o build do projeto pois tinha faltado no arquivo "produtos.ts" mudar o caminho das imagens de "/assets" para "./assets" pois da primeira forma, só funciona no servidor local. Foi selecionado o "/assets" com o mouse e dado um ctrl+f para a busca e na barra de busca foi clicado na setinha para baixo e colocado no campo o caminho certo "./assets" e clicado no segundo ícone a direita "Substituir tudo".


