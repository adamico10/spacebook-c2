<<<<<<< HEAD
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
=======
var SpacebookApp = function () {
  var posts = [
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]},
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]},
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]}
  ];

  // the current id to assign to a post
  var currentId = 0;
  var $posts = $('.posts');

  var _findPostById = function (id) {
    for (var i = 0; i < posts.length; i += 1) {
      if (posts[i].id === id) {
        return posts[i];
      }
    }
  }

  var createPost = function (text) {
    var post = {
      text: text,
      id: currentId
    }

    currentId += 1;

    posts.push(post);
  }

  var renderPosts = function () {
    $posts.empty();

    for (var i = 0; i < posts.length; i += 1) {
      var post = posts[i];

      var commentsContainer = '<div class="comments-container">' +
      '<input type="text" class="comment-name">' +
      '<button class="btn btn-primary add-comment">Post Comment</button> </div>';

      $posts.append('<div class="post" data-id=' + post.id + '>'
        + '<a href="#" class="remove">remove</a> ' + '<a href="#" class="show-comments">comments</a> ' + post.text +
        commentsContainer + '</div>');
    }
  }

  var removePost = function (currentPost) {
    var $clickedPost = $(currentPost).closest('.post');
    var id = $clickedPost.data().id;

    var post = _findPostById(id);

    posts.splice(posts.indexOf(post), 1);
    $clickedPost.remove();
  }

  var toggleComments = function (currentPost) {
    var $clickedPost = $(currentPost).closest('.post');
    $clickedPost.find('.comments-container').toggleClass('show');
  }

  return {
    createPost: createPost,
    renderPosts: renderPosts,
    removePost: removePost,

    // TODO: Implement
    // createComment: createComment,

    // TODO: Implement
    // renderComments: renderComments,

    // TODO: Implement
    // removeComment: removeComment,
    toggleComments: toggleComments
  }
}

var app = SpacebookApp();

// immediately invoke the render method
app.renderPosts();

// Events
$('.add-post').on('click', function () {
  var text = $('#post-name').val();
  
  app.createPost(text);
  app.renderPosts();
});

$('.posts').on('click', '.remove', function () {
  app.removePost(this);
});

$('.posts').on('click','.show-comments', function () {
  app.toggleComments(this);
});

// more git project
>>>>>>> moregit
