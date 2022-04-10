import initModels from '../models/init-models.js';
import Lesson from '../models/lessons.js';
import db from '../db.js';

initModels(db);

class LessonsController{
	async getAll(req, res) {
		try {
			const lessons = await Lesson.findAll();
			if (!lessons) {
                throw new Error();
            } else {
                res.json(lessons);
            }
		} catch (err) {
			res.status(400).json({message: err.message});
		}
	}
}

export default new LessonsController();