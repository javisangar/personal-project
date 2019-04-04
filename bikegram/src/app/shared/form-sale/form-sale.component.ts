import { Component, OnInit } from '@angular/core';
import { SaleService } from 'src/app/services/sales.service';


@Component({
  selector: 'app-form-sale',
  templateUrl: './form-sale.component.html',
  styleUrls: ['./form-sale.component.scss']
})
export class FormSaleComponent implements OnInit {
  saleFormOpen = false;
  sales: Array<any>;


  constructor(private saleService: SaleService) { }

  ngOnInit() {
    this.getSales();

  }

  setSaleFormStatus(open) {
    this.saleFormOpen = open
  }

  getSales() {

    this.sales = this.saleService.getSales();
  }

  createSale() {
    const sale = {
      id: Date.now(),
      userImg: '',
      title: 'Javier Sánchez',
      subtitle: 'Madrid',
      brand: 'Honda CBR 600',
      kilometers: '12.500 km',
      image: '../../../../assets/images/honda1.jpg',
      price: '4.200€',
      text: 'Vendo Honda CBR 600 del 2009 con pocos kilómetros, revisión recién hecha'
    }
    this.saleService.addSale(sale)
    this.getSales()
    this.setSaleFormStatus(false)
  }


}
