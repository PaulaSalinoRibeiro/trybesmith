import express from 'express';
import product from './router/product.router';
import user from './router/user.router';
import order from './router/order.router';
import login from './router/login.router';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());

app.use('/products', product);

app.use('/users', user);

app.use('/orders', order);

app.use('/login', login);

app.use(errorHandler);

export default app;
