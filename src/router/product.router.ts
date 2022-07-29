import { Router } from 'express';
import * as ProductController from '../controller/product.controller';

const product = Router();

product.post('/', ProductController.createProduct);

product.get('/', ProductController.listAllProduct);


export default product;