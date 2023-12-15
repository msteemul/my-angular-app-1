import { Component } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { EventBusService } from '../../service/broadcast/broadcast.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  productsList:any[]=[];

  constructor(private Product:ProductService,
    private eventBusService: EventBusService){}

  ngOnInit():void {
    this.fetchData();
    this.eventBusService.eventEmitter.subscribe((data: any) => {
      // Handle the received event data
      this.productsList.map((item:any)=>{
        if(item.id === data.id){
          item.name = data.name;
          item.price = data.price;
          item.quantity = data.quantity;
          item.description = data.description;
          item.description = data.description;
        }
      })
      // Perform actions based on the received event data
    });
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
