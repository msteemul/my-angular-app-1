import { Component } from '@angular/core';
import { ProductService } from '../../service/product/product.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  productsList:any[]=[];

  constructor(private Product:ProductService){}

  ngOnInit():void {
    this.fetchData();
  }

  async fetchData():Promise<any> {
    try{
      const data = await this.Product.getData()
      console.log('waa data laem', data)
      this.productsList = data;
    }catch(e){
      console.log(e);
    }
    
  }

}
