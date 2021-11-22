import express from 'express';
import { name, movieReviews, id } from './genresData';
import uniqid from 'uniqid'

const router = express.Router(); 
router.get('/:id/genres', (req, res) => {
    const id = parseInt(req.params.id);
    // find reviews in list
    if (movieReviews.id == id) {
        res.status(200).json(movieReviews);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

export default router;