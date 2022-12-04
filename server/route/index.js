import express from 'express';

const router = express.Router();

router.get('/', async (request, response) => {
    response.render('index');
});

export const indexRouter = router;