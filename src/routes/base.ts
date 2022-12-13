import express, { Response, Request } from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(_req: Request, res: Response) {
  res.json({
    msg: 'Working'
  });
});

export const baseRouter = router;
