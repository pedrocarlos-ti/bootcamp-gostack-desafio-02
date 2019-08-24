import express from 'express';

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {}

  routes() {
    this.express.get('/', (req, res) => res.send('Hello World'));
  }
}

export default new App().express;
