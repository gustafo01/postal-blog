module.exports = class PostDto {
    userId;
    title;
    content;

    constructor(model) {
        this.userId = model.userId;
        this.title = model.title;
        this.content = model.content;
    }
}
