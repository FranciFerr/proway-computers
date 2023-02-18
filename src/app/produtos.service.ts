import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos; //Vai puxar as informações do arquivo produtos.ts
  constructor() { }

  getAll(){
    return this.produtos; //Retorna todos os produtos
  }

  /** Aqui ira retorna o produto através do numéro do seu id.Foi instanciada uma variável "produtoId" do tipo number
   * A função vai fazer uma busca "find" no arquivo produtos.ts "this.produtos" e o produto vai receber o número
   * do id "produtoId" da váriável do outro arquivo "produtos.ts" onde foi instanciado o numero do id
   * correspondente a cada produto "produto.id".
   */

  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id == produtoId);
  }
}
