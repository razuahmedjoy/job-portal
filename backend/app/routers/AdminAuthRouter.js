import express from 'express'
const router = express.Router();

import auth from '../middleware/auth.js';
import AdminAuthController from '../controllers/AdminAuthController.js';
import { admin } from '../../utils/constants/constants.js';

//routes
router.post('/signin', AdminAuthController.Signin);
router.get('/profile', auth(admin), AdminAuthController.Profile);

export const AdminAuthRouter = router;