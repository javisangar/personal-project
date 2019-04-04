import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  sales = [{
    id: Date.now(),
    userImg: '',
    title: 'Javier Sánchez',
    subtitle: 'Madrid',
    brand: 'Honda CBR 600',
    kilometers: '12.500 km',
    image: '../../../../assets/images/honda1.jpg',
    price: '4.200€',
    text: 'Vendo Honda CBR 600 del 2009 con pocos kilómetros, revisión recién hecha'
  }];

  constructor() { }

  ngOnInit() {
  }

}
