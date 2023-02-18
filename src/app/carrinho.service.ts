import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho [] = [];
  constructor() { }

  /**Essa função vai pegar todos os produtos que estão dentro do carrinho e armazena-las no localStorage(sessão).
   * Esse dado virá como uma string, portanto para converter em um objeto deve-se adicionar o JSON.parse.
   * Ali deu um erro e portanto foi colocadas duas pipes "||" sinalizando a condição "OU" e colocada como vazio
   *  porque o parse pega somente string.
   * A constante "carrinho" pegará a chave ("carrinho") que aparece na ferramenta do desenvolvedor em
   * "Aplicativos -> Armazenamento Local" aparece "chave" e "valor".
  */
  obtemCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho){
    //Aqui dará um push(empurrar) nos itens que já tem no carrinho e formará uma lista
    this.itens.push(produto);

    //Aqui o localStorage salvará as informações para quando sair da página
    /** Aqui dará um erro pois o setItem recebe uma string e os itens são dados diversos,então para
     * converter em uma string, usa-se o "JSON.stringfy". */
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  //Remove o produto do localStorage e da badge
  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }
}
