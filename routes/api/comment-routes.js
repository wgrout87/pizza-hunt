const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controllers');

// POST route for comments on pizza with pizzaId
router.route('/:pizzaId').post(addComment);

// DELETE route for comment with commentId on pizza with pizzaId
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;