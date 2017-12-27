// posts array
var posts = [];
// starting post id
var postid = 0;

// when we click "add" -> get the text + assign unique id then push it to array -> post on site)
$('.add-post').click(function() {
    newPost = {text: $('#post-name').val(), id: postid++}
    posts.push(newPost)
    resetList()
})

// function to empty posts and rerender again.
function resetList() {
    $('.posts').empty();
    for(var i = 0; i < posts.length; i++) {
    $('.posts').append('<p class="post" data-id=' + posts[i].id +'>' + '<button type="button" class="remove">' + 'REMOVE' + '</button>' + posts[i].text + '</p>')
    }
}

// when click remove for one post -> delete it and render


$('.posts').on('click','.remove', function() {

    removeItemNum = $(this).parent().data();
    
    for(var i = 0; i < posts.length; i++) {
        if(removeItemNum.id == posts[i].id) {
        posts.splice(i,1);
        resetList()
    }}}
)

