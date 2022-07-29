import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = async (err, _req, res, next) => {
  const { name, message } = err;
  // console.log(`name: ${name}`);

  switch (name) {
    case 'Unauthorized':
      res.status(401).json({ message });
      break;
    case 'BadRequest':
      res.status(400).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }
  next();
};

export const lint = '';