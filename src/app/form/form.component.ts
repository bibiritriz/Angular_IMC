import { Component, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  altura : number = 0;
  peso : number = 0;
  resultado!: number;
  imc : string = '';
  imagem : string = '';
  classe : string = '';

  @ViewChild('result') elemento!: ElementRef;
  @Output() imagemImc = new EventEmitter<string>();

  calcular(){
    this.resultado = Number(this.peso) / Math.pow(Number(this.altura), 2);
    if(this.resultado >= 0 && this.resultado <= 1) this.resultado*=10000

    this.resultado = parseFloat(this.resultado.toFixed(2));

    this.imagem = this.verificar(this.resultado);
    this.imagemImc.emit(this.imagem);
  }

  verificar(resultado : number): string{
    if (resultado === 0) return '';
    
    const categorias = [
      { limite: 18.5, imc: 'Abaixo do peso', classe: 'alert alert-primary', imagem: 'https://441animalhospitalboca.com/wp-content/uploads/2024/03/cat-too-skinny.jpg' },
      { limite: 24.9, imc: 'Normal', classe: 'alert alert-success', imagem: 'https://cdn.shopify.com/s/files/1/0535/2738/0144/files/shutterstock_649354318_1024x1024.jpg?v=1656532463' },
      { limite: 29.9, imc: 'Sobrepeso', classe: 'alert alert-warning', imagem: 'https://images.squarespace-cdn.com/content/v1/62a39d94533ec9640a7f1042/1673553575786-8ZNDZCSHQX6B14YHV8EF/fat+cat.jpg' },
      { limite: 34.9, imc: 'Obesidade grau I', classe: 'alert alert-danger', imagem: 'https://whatyourcatwants.com/wp-content/uploads/2020/09/Big_Fat_Red_Cat-Wikimedia-Commons.jpg' },
      { limite: 39.9, imc: 'Obesidade grau II', classe: 'alert alert-danger', imagem: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/g-tdy-110728-fatcat-01.jpg' },
      { limite: Infinity, imc: 'Obesidade grau III', classe: 'alert alert-dark', imagem: 'https://i.pinimg.com/564x/26/a9/c3/26a9c3276223c2445f92074b860ac567.jpg' }
    ];

    const categoria = categorias.find(cat => resultado <= cat.limite);
    
    if (categoria) {
      this.imc = categoria.imc;
      this.classe = categoria.classe;
      return categoria.imagem;
    }

    this.imc = '';
    this.classe = 'alert alert-secondary';
    return '';
  }

  mostrarElemento(){
    if(this.resultado != 0 && !isNaN(this.resultado)){
      this.elemento.nativeElement.classList.remove('d-none');
    }else{
      this.elemento.nativeElement.classList.add('d-none');
    }
  }
}
