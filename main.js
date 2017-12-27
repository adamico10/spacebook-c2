var posts = [];
var postid = 1;

$('.add-post').click(function() {
    newPost = {text: $('#post-name').val(), id: postid++ }
    posts.push(newPost)
})