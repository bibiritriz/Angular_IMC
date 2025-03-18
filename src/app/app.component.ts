import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  imagem: string = '';

  atualizarImagem(url: string){
    this.imagem = url;
  }
}
