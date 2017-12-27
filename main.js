// posts array
var posts = [];
// starting post id
var postid = 1;

// when we click add it gets the text + assign unique id then push it to array + post on site)
$('.add-post').click(function() {
    newPost = {text: $('#post-name').val(), id: postid++}
    posts.push(newPost)
    renderPost()
})

function renderPost() {
   postid--;
    $('.posts').append('<p class="post" data-id=' + postid +'>' + '<button type="button" class="remove">' + 'REMOVE' + '</button>' + newPost.text + '</p>')
    postid++;
}

function resetList() {
    $('.posts').empty();
    for(var i = 0; i < posts.length; i++) {
    $('.posts').append('<p class="post" data-id=' + posts[i].id +'>' + '<button type="button" class="remove">' + 'REMOVE' + '</button>' + posts[i].text + '</p>')
    }
}

$('.posts').on('click','.remove', function() {
    $(this).parent.data(i).remove;
})

/*
<p class="post" data-id="1"> <button type="button" class="remove">REMOVE</button> Hey man! I'm a post!</p>
    $('this').parents('p').remove();
    posts.splice(this.data,1)


*/