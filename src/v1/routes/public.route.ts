import { Router, Request, Response } from 'express'
const router:Router = Router();


router.get('/', (req: Request, res: Response) => {
    res.json({
        msg: 'public route',
        data: null,
        date: new Date
    });
});


export default router;
