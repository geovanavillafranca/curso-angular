import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com'
  urlImagem = 'https://cdn.leroymerlin.com.br/products/papel_de_parede_paisagem_lago_natureza_sala_painel_052pcp_1567477748_5fd8_600x600.jpg'

  cursoAngular: boolean = true;

  getValor(){
    return 1 
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
