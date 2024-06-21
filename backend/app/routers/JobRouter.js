import express from 'express'
const router = express.Router();

import auth from '../middleware/auth.js';
import JobController from '../controllers/JobController.js';
import { admin, employer } from '../../utils/constants/constants.js';

//routes
router.get('/all', JobController.GetAllJobs);
router.get('/all-for-logged-user', auth(admin, employer), JobController.GetAllJobsForLoggedUser);
router.post('/create', auth(employer), JobController.PostJob);
router.patch('/update-job-status/:jobId', auth(admin), JobController.ApproveDisapproveJob);

export const JobRouter = router;