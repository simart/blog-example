$(function(){
    //event handlers
    var showBlog = function(){
        $('.container > section').hide();
        $('#blog').css('display', 'inline-block');
        $('#blog > article').show();
    }.bind(this);

    var showAbout = function(){
        $('.container > section').hide();
        $('#about').css('display', 'inline-block');
    }.bind(this);

    var showClasses = function(){
        $('.container > section').hide();
        $('#classes').css('display', 'inline-block');
    }.bind(this);
    
    var followLink = function(evt){
        var el = $(evt.target);
        if(el.prop('tagName') === 'A'){
            var articleId = el.attr('href');
        }else{
            var articleId = el.children(0).attr('href');
        }
        $('.container > section').hide();
        $('#blog').css('display', 'inline-block');
        $('#blog > article').hide();
        $(articleId).show();
    }.bind(this);

    var fakeServerReq = function(){
        $('button').hide();
        $('#jquery-msg').show();
        console.log('<button> clicked');
        console.log('if this app had a server, information indicating that the blog post had been "liked" would be sent to the server right now.');
    }.bind(this);

    var hideJQueryMsg = function(){
        $('#jquery-msg').hide();
        $('button').show();
        console.log('<p> with id "jquery-msg" clicked');
    }.bind(this);

    //show and hide different 'pages' based on the link clicked
    $('.blog-link').on('click', showBlog);
    $('.about-link').on('click', showAbout);
    $('.classes-link').on('click', showClasses);

    //show and hide different blog posts 
    $('#sidebar li').on('click', followLink);
    $('article h2').on('click', followLink);

    //show and hide jQuery message
    $('button').on('click', fakeServerReq);
    $('#jquery-msg').on('click', hideJQueryMsg);
})