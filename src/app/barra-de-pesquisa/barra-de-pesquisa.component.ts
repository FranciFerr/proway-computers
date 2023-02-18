import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-de-pesquisa',
  templateUrl: './barra-de-pesquisa.component.html',
  styleUrls: ['./barra-de-pesquisa.component.css']
})
export class BarraDePesquisaComponent {

  descricao = "";

  constructor(
    private router: Router
  ){}

  //Função para pesquisar mesmo estando em uma página diferente
  pesquisar(){
    if(this.descricao){
      this.router.navigate(["produtos"], {queryParams: { descricao: this.descricao}});
      return;
    }

    this.router.navigate(["produtos"]);
  }
}
