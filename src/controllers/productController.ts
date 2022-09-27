import { Request, Response, NextFunction } from 'express';
import * as productService from '../service/productService';
import { IProduct } from '../interfaces/IProduct';

export async function createProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const product = req.body as IProduct;
    const result = await productService.createProduct(product);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
    console.log(error);
  }
}

export async function getAllProducts(_req: Request, res: Response) {
  const result = await productService.getAllProducts();
  res.status(200).json(result);
}