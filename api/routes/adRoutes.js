import express from 'express';
import { getFiles } from '../controller/adcontroller.js';

const router = express.Router();

router.get('/list', getFiles);

export default router;
