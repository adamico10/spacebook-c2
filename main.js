// posts array
var posts = [];
// starting post id
var postid = 0;

// when we click "add" -> get the text + assign unique id then push it to array -> post on site)
$('.add-post').click(function() {
    newPost = {text: $('#post-name').val(), id: postid++};
    posts.push(newPost);
    resetList()
})

// function to empty posts and rerender again.
function resetList() {
    $('.posts').empty();
    for(var i = 0; i < posts.length; i++) {
    $('.posts').append('<p class="post" data-id=' + posts[i].id +'>' 
    + '<button type="button" class="remove">' + 'REMOVE' + 
    '</button>' + posts[i].text + 
    //comments section:
    '<form>' + "Username: " + '<input type="text" name="username" id="username">' + 
    "Comment" + '<input type="text" name="comment" id="comment">'
    +
    '<button type="button" class="add-comment">' + 'Comment' + '</button>' + '</form>'    
    + '</p>')
    }
}

// when click remove for one post -> delete it and render

$('.posts').on('click','.remove', function() {
// get post id
    removeItemNum = $(this).parent().data();
    // loop through posts to find matching id
    for(var i = 0; i < posts.length; i++) {
        if(removeItemNum.id == posts[i].id) {
        posts.splice(i,1);
        resetList()
    }}}
)

// Add a feature that allows each post to receive a comment. 
// Each post will require it's own form, allowing a user to leave their username and some kind of comment text. 
// List all the comments and associated users below the post.

$('.posts').on('click','.add-comment', function(){
    console.log("hey")
    lastComment = ({post: $('#comment').val(), username: $('#username').val()});
    postIsFrom = $(this).parent().data();
    console.log(postIsFrom);
})


/*
postFor = $(this).find('p.post').data();
    find('p.post').data())



    posts[postFor].comment = ({post: $('#comment').val(), username: $('#username').val()})
    resetList()
    */


