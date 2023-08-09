import express, { Express, Request, Response, Application } from 'express';

const router = express.Router();

import { getImage, setTodo } from '../controllers/unsplashControllers';

router.route('/unsplash').get(getImage).post(setTodo);

export default router;
