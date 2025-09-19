import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './cabecalho/header';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  /* A variavel se chama atributo em Orientação a Objetos */
    titulo:string = "Aprendendo Angular";
    imagem:string = "https://cdn.pixabay.com/photo/2025/09/08/04/04/bearded-dragon-9821326_1280.jpg";

    /* Conceito de objeto */
    pessoa = {
      nome: "João",
      idade: 19
    }

    /* Conceito array */
    caixaDefrutas = [
      {nome: "Banana", quantidade: 5},
      {nome: "Maçã", quantidade: 3},
      {nome: "Laranja", quantidade: 2},
      {nome: "Abacaxi", quantidade: 1}
    ]

  /* Conceito de função */
  /* A função se chama metodo em Orientação a Objetos */
  controle = true;
  clicou(){
    if(this.controle){
      this.controle = !this.controle;
      this.imagem = "https://cdn.pixabay.com/photo/2024/12/14/08/11/red-leaf-9266941_1280.jpg";
    }else{
      this.controle = !this.controle;
      this.imagem = "https://cdn.pixabay.com/photo/2025/09/08/04/04/bearded-dragon-9821326_1280.jpg";
    }
  }

}
