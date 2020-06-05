import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public n1:number;
  public n2:number;
  public resultado:number;

  constructor() {}

  public somar(){
    this.resultado = (this.n1) + (this.n2);

    if((this.n1 === null) || (this.n2 === null) || ( this.resultado === null)){
      this.resultado = null;
    }
  }

  public subtrair(){
    this.resultado = this.n1 - this.n2;

    if((this.n1 === null) || (this.n2 === null) || ( this.resultado === null)){
      this.resultado = null;
    }
  }

  public multiplicar(){
    this.resultado = this.n1 * this.n2;

    if((this.n1 === null) || (this.n2 === null) || ( this.resultado === null)){
      this.resultado = null;
    }
  }

  public dividir(){
    this.resultado = this.n1 / this.n2;

    if((this.n1 === null) || (this.n2 === null) || ( this.resultado === null)){
      this.resultado = null;
    }
  }

  public limpar(){
    this.resultado = null;
    this.n1 = null;
    this.n2 = null;
  }

  



}
