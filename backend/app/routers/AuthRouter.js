import express from 'express'
const router = express.Router();

import auth from '../middleware/auth.js';
import AuthController from '../controllers/AuthController.js';
import { candidate, employer } from '../../utils/constants/constants.js';

//routes
router.post('/signup', AuthController.Signup);
router.post('/signin', AuthController.Signin);
router.get('/profile', auth(employer, candidate), AuthController.Profile);

export const AuthRouter = router;