// import connection from '../utils/connection';
import { IProduct } from '../interfaces/IProduct';
import * as productModel from '../models/productModel';

export async function createProduct(product: IProduct) {
  const result = await productModel.creatProduct(product);
  return result;
}

export async function getAllProducts() {
  const result = await productModel.getAllProducts();
  return result;
}