import express from 'express'
const router = express.Router();

import auth from '../middleware/auth.js';
import { admin } from '../../utils/constants/constants.js';
import UserController from '../controllers/UserController.js';

//routes
router.patch('/block-unblock/:userId', auth(admin), UserController.BlockUnBlockUser);

router.get('/employers', auth(admin), UserController.GetAllEmployers);
router.get('/candidates', auth(admin), UserController.GetAllCandidates);

router.patch('/update-employer/:employerId', auth(admin), UserController.UpdateEmployer);
router.patch('/update-candidate/:candidateId', auth(admin), UserController.UpdateCandidate);

export const UserRouter = router;