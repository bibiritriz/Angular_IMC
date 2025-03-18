import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  imagem: string = '';
  
  ngOnInit(): void {
    this.verificarExistencia()
  }

  atualizarImagem(url: string){
    this.imagem = url;
    this.verificarExistencia()
  }

  verificarExistencia(){
    const imagemTag = document.getElementById('resultado-imagem')
    if(this.imagem === ''){
      imagemTag?.classList.add('d-none')
    }else {
      imagemTag?.classList.remove('d-none')
    }
  }
}
