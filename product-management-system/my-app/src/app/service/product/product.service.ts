import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products'
  constructor(private http:HttpClient){ }

  async getData():Promise<any>{
    try{
      const response = await this.http.get<any>(this.apiUrl).toPromise();
      return response

    }catch(e){
      console.log(e)
    }
  }

}
