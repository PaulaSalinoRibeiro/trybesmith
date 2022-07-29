export const throwError = (name: string, message: string): void => {
  const e = new Error('Expired or invalid token');
  e.name = name;
  e.message = message;
  throw e;
};

export const lint = '';