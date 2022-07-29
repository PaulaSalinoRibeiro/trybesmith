import express from 'express';
import product from './router/product.router';
import user from './router/user.router';

const app = express();

app.use(express.json());

app.use('/products', product);

app.use('/users', user);

export default app;
