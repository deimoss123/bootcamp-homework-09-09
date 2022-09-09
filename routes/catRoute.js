import { Router } from 'express';
import { createCat, getAllCats } from '../controller/catController.js';

const router = Router();

router.post('/create', createCat);
router.get('/get-all', getAllCats);
// router.get('/get/:id')
// router.delete('/delete/:id')
// router.put('/update/:id')

export default router;
