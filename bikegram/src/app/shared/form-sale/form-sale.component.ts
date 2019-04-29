import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SaleService } from 'src/app/services/sales.service';
import { Router, ActivatedRoute } from "@angular/router";
import { PostsModel } from '../../models/posts.model';


@Component({
  selector: 'app-form-sale',
  templateUrl: './form-sale.component.html',
  styleUrls: ['./form-sale.component.scss']
})
export class FormSaleComponent implements OnInit {
  
  myForm: FormGroup;
  sales: Array<any>;
  postModel: PostsModel;
  showError = false;
  sale: any = {};
  id;


  constructor(private saleService: SaleService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.getSales();
    this.myForm = new FormGroup({
      'image': new FormControl('', [
        Validators.required
      ]),
      'brand': new FormControl('', [
        Validators.required
      ]),
      'kilometers': new FormControl('', [
        Validators.required
      ]),
      'price': new FormControl('', [
        Validators.required
      ]),
      'description': new FormControl('', [
        Validators.required
      ])
    });
    this.activatedRoute.params.subscribe(res => {
      this.id = res.id;
      this.saleService.getSale(res.id).then((sale) => {
       this.sale = sale;

      })

    })

  }

/*
  getSales() {
    this.saleService.getSales().then(sales => {
      this.sales = sales
    })
  }
*/

createSale() {
  if (this.myForm.valid) {
    this.saleService.addSale(this.myForm.value).then(
      response => {
        this.showError = false;
        this.router.navigate(['home']);
      },
      err => {
        this.showError = true;
      }
    );
  }
}

editSale(){
    
  if (this.myForm.valid) {
    let val = this.myForm.value;
    val._id = this.sale._id;
    this.saleService.edit(val).then(
      response => {
        this.showError = false;
        this.router.navigate(['home']);
      },
      err => {
        this.showError = true;
      }
    );
  }
}

}
