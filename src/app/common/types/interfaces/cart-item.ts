// Own
// Types
// Interfaces
import { ProductBaseInfoI } from "./product-base-info";

export interface CartItemI extends ProductBaseInfoI {
  addedQuantity: number;
}
