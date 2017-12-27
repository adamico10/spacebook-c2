var posts = [];
var postid = 1;

$('.add-post').click(function() {
    newPost = {text: $('#post-name').val(), id: postid++}
    posts.push(newPost)
    renderPost()
})

function renderPost() {
   postid--;
    $('.posts').append('<p class="post" data-id=' + postid +'>' + newPost.text + '</p>')
    postid++;
}
 
