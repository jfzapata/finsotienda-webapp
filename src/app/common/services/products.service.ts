import { Injectable } from '@angular/core';

// Own
// Types
// Interfaces
import { ProductI } from '@app/common/types/interfaces/product';
// Constants
import { PRODUCTS } from '@app/common/constants/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  findAll(): ProductI[] {
    return PRODUCTS;
  }

  findByName(productName: string): ProductI[] {
    if (productName) {
      return PRODUCTS.filter(product => product.name.toLocaleLowerCase().includes(productName.toLowerCase()));
    } else {
      return PRODUCTS;
    }
  }
}
