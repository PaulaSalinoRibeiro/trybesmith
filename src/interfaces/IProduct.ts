export default interface IProduct {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface IProductsId {
  productsIds: string 
}

export type ProductsIds = {
  productsIds: number[]
};