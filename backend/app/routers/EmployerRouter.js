import express from 'express'
const router = express.Router();

import auth from '../middleware/auth.js';
import EmployerController from '../controllers/EmployerController.js';

//routes
router.get('/by-requester', auth(), EmployerController.GetLoggedEmployer);
router.patch('/update', auth(), EmployerController.UpdateEmployer);

export const EmployerRouter = router;