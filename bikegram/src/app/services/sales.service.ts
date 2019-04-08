import {
    Injectable
} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SaleService {
    sales: Array<any>;


    constructor() {
        this.sales = [{
            id: Date.now(),
            userImg: '',
            title: 'Javier Sánchez',
            subtitle: 'Madrid',
            brand: 'Honda CBR 600',
            kilometers: '12.500 km',
            image: '../../../../assets/images/honda1.jpg',
            price: '4.200€',
            text: 'Vendo Honda CBR 600 del 2009 con pocos kilómetros, revisión recién hecha'
        }]
    }
    getSales() {
        return this.sales;
    }
    addSale(sale) {
        this.sales.push(sale)
    }

    removeSale(id){
        this.sales = this.sales.filter(p => p.id !== id)
      }
    
}

