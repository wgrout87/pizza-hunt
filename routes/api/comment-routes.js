const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controllers');

// POST route for comments on pizza with pizzaId
router.route('/:pizzaId').post(addComment);

// DELETE route for comment with commentId on pizza with pizzaId
router.route('/:pizzaId/:commentId').put(addReply).delete(removeComment);

// DELETE router for a reply with replyId on comment with commentId on pizza with pizzaId
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;