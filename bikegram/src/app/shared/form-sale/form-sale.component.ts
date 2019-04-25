import { Component, OnInit } from '@angular/core';
import { SaleService } from 'src/app/services/sales.service';


@Component({
  selector: 'app-form-sale',
  templateUrl: './form-sale.component.html',
  styleUrls: ['./form-sale.component.scss']
})
export class FormSaleComponent implements OnInit {
  sales: Array<any>;


  constructor(private saleService: SaleService) { }

  ngOnInit() {
    //this.getSales();

  }


  getSales() {
    this.saleService.getSales().then(sales => {
      this.sales = sales
    })
  }

    addSale() {

    }

}
