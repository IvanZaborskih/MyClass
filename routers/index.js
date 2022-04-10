import Router from 'express';
const router = new Router();
import lessonsRouter from './lessonsRouter.js';

router.use('/', lessonsRouter);

export default router;