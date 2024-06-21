import express from 'express'
const router = express.Router();

import auth from '../middleware/auth.js';
import CandidateController from '../controllers/CandidateController.js';

//routes
router.get('/by-requester', auth(), CandidateController.GetLoggedCandidate);
router.patch('/update', auth(), CandidateController.UpdateCandidate);

export const CandidateRouter = router;