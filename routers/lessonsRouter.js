import Router from 'express';
const router = new Router();
import lessonsController from '../controllers/lessonsController.js';

router.get('/', lessonsController.getAll);

export default router;