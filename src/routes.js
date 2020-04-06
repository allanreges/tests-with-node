import { Router } from 'express';

import User from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', User.store);

export default routes;
