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
    console.log('llamada al metodo')
  }

}
