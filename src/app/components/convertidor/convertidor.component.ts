import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  //declaro variables
  textoInput= 'Digite información';
  cantidad = 0;
  tengo = 'USD'
  quiero = 'EUR'
  total = 0;
  
  //creo array
  monedas: string[] = ['USD', 'EUR', 'LIBRA']

  constructor(){}

  ngOnInit(): void {
    
  }

  //Creo metodo
  convertir(){
    
    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad;
        } else if (this.quiero === 'EUR') {
          this.total = parseFloat((this.cantidad * 0.84).toFixed(2));
        } else if (this.quiero === 'LIBRA') {
          this.total = parseFloat((this.cantidad * 0.75).toFixed(2));
        }
        break;
    
      case 'EUR':
        if (this.quiero === 'USD') {
          this.total = parseFloat((this.cantidad * 0.84).toFixed(2));
        } else if (this.quiero === 'EUR') {
          this.total = this.cantidad;
        } else if (this.quiero === 'LIBRA') {
          this.total = parseFloat((this.cantidad * 0.89).toFixed(2));
        }
        break;
    
      case 'LIBRA':
        if (this.quiero === 'USD') {
          this.total = parseFloat((this.cantidad * 0.75).toFixed(2));
        } else if (this.quiero === 'EUR') {
          this.total = parseFloat((this.cantidad * 0.89).toFixed(2));
        } else if (this.quiero === 'LIBRA') {
          this.total = this.cantidad;
        }
        break;
    }

  }

}
