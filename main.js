// posts array
var posts = [];

// starting post id
var postid = 0;

// find post function
function findPost(id) {
    for (var i = 0; i < posts.length; i++) {
        if(postIsFrom == [posts[i].id]){
            return posts[id]
        }}}

// function to generate comments html
function addComment(i) {
    for(var j = 0; j < posts[i].comments.length; j++) {
        '<li>' + 'username: ' + posts[i].comments.username[j] + ' post: ' 
        + posts[i].comments.post[j] + '</li>' 
    }
}

// function to empty posts and rerender again.
function resetList() {
    $('.posts').empty();
    for(var i = 0; i < posts.length; i++) {
    $('.posts').append('<p class="post" data-id=' + posts[i].id +'>' 
    + '<button type="button" class="remove">' + 'REMOVE' + 
    '</button>' + posts[i].text  + 
    //comments section:
    "Username: " + '<input type="text" name="username" id="username">' + 
    "Comment" + '<input type="text" name="comment" id="comment">'
    +
    '<button type="button" class="add-comment">' + 'Comment' + '</button>'  +
     '</p>'
    )
    }
}


// when we click "add" -> get the text + assign unique id then push it to array -> post on site)
$('.add-post').click(function() {
    newPost = {text: $('#post-name').val(), id: postid++, comments: []};
    posts.push(newPost);
    resetList()
})
// when click remove for one post -> delete it and render

$('.posts').on('click','.remove', function() {
// get post id
    removeItemNum = $(this).parent('.post').data().id;
    i = findPost(removeItemNum)
    posts.splice(i,1)
    resetList()
})


// On click of comment button -> get values -> push to array -> render !
$('.posts').on('click','.add-comment', function(){
    postIsFrom = $(this).closest('p').data().id;   
    lastComment = ({post: $(this).closest('p').find('#comment').val(), username: $(this).closest('p').find('#username').val()});            
    findPost(postIsFrom).comments.push(lastComment)
    resetList()    
        }       
)
