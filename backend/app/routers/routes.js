import express from 'express';
import { AuthRouter, CandidateRouter, EmployerRouter, AdminAuthRouter, UserRouter, JobRouter, ApplyRouter } from './index.js';

const router = express.Router();

const apiRoutes = [
    {
        path: '/admin-auth',
        route: AdminAuthRouter,
    },
    {
        path: '/auth',
        route: AuthRouter,
    },
    {
        path: '/user',
        route: UserRouter,
    },
    {
        path: '/candidate',
        route: CandidateRouter,
    },
    {
        path: '/employer',
        route: EmployerRouter,
    },
    {
        path: '/job',
        route: JobRouter,
    },
    {
        path: '/apply',
        route: ApplyRouter,
    },
];

apiRoutes.forEach(route => router.use(route.path, route.route));
export default router;