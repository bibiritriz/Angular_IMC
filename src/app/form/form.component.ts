import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  altura : number = 0;
  peso : number = 0;
  resultado !: number;
  imc : string = '';
  imagem : string = '';
  classe : string = 'alert alert-secondary';

  @Output() imagemImc = new EventEmitter<string>();

  calcular(){
    this.resultado = parseFloat((this.peso / Math.pow(this.altura, 2)).toFixed(2));
    this.imagem = this.verificar(this.resultado);
    this.imagemImc.emit(this.imagem);
  }

  verificar(resultado : number){
    if (resultado <= 18.5) {
        this.imc = 'Abaixo do peso';
        this.classe = 'alert alert-primary';
        return 'https://abeso.org.br/wp-content/uploads/2019/12/imc_m_06.png.webp';
    } else if (resultado > 18.5 && resultado <= 24.9) {
        this.imc = 'Normal';
        this.classe = 'alert alert-success';
        return 'https://abeso.org.br/wp-content/uploads/2019/12/imc_m_05.png.webp';
    } else if (resultado > 24.9 && resultado <= 29.9) {
        this.imc = 'Sobrepeso';
        this.classe = 'alert alert-warning';
        return 'https://abeso.org.br/wp-content/uploads/2019/12/imc_m_04.png.webp';
    } else if (resultado > 29.9 && resultado <= 34.9) {
        this.imc = 'Obesidade grau I';
        this.classe = 'alert alert-danger';
        return 'https://abeso.org.br/wp-content/uploads/2019/12/imc_m_03.png.webp';
    } else if (resultado > 34.9 && resultado <= 39.9) {
        this.imc = 'Obesidade grau II';
        this.classe = 'alert alert-danger';
        return 'https://abeso.org.br/wp-content/uploads/2019/12/imc_m_02.png.webp';
    } else if (resultado > 39.9) {
        this.imc = 'Obesidade grau III';
        this.classe = 'alert alert-dark';
        return 'https://abeso.org.br/wp-content/uploads/2019/12/imc_m_01.png.webp';
    } else{
      this.imc = '';
      this.classe = 'alert alert-secondary';
      return '';
    }
  }
}
