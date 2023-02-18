import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit{
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService : ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap; //Traz todos os parâmetros da rota
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId);
    /*Sem passar o "Number" na constante acima "produtoId" ocorre um erro em "getOne(produtoId)" pois dessa
    forma ele espera uma string ou um valor nulo, então com o id é uma variável do tipo number, deve ser
    instanciado na declaração da constante produtoId*/

  }

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
    const produto: IProdutoCarrinho = {
      /*Os três pontos conhecido como spread, sinaliza que pegará tudo do produto, todos os dados.Ali no produto
      foi adicionado o operador ! pq ele foi instanciado lá em cima com um valor "undefinided" e esse ponto
      confirma que o produto existe*/
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto);
    /**OBS: Indo na ferramenta do desenvolvedor, clicando em "Aplicativos" em "Armazenamento local" quando clica
     * em "Adicionar ao carrinho" da para ver o item sendo adicionado */
  }

}
