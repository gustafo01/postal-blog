const postService = require('../service/post-service');

class PostController {
    async createPost(req, res, next) {
        try {
            const {userId, title, content} = req.body
            const postData = await postService.createPost(userId, title, content)
            return res.json(postData);
        } catch (e) {
            next(e)
        }
    }
    async getPosts(req, res, next) {
        try {
            const posts = await postService.getAllPosts();
            return res.json(posts);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new PostController();