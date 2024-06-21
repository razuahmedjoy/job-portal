import express from 'express'
const router = express.Router();

import ApplyController from '../controllers/ApplyController.js';
import auth from '../middleware/auth.js';
import { admin, employer } from '../../utils/constants/constants.js';

//routes
router.post('/job/:jobId', ApplyController.ApplyToJob);
router.patch('/shortlisted/:applicantId', auth(employer), ApplyController.ShortlistCandidate);
router.get('/applicant/:jobId', auth(employer, admin), ApplyController.GetApplicantById);

export const ApplyRouter = router;