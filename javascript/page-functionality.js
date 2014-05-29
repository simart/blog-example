$(function(){
    //show and hide different 'pages' based on the link clicked
    $('.blog-link').on('click', function(){
        $('.container > section').hide();
        $('#blog').css('display', 'inline-block');
        $('#blog > article').show();
    }.bind(this));

    $('.about-link').on('click', function(){
        $('.container > section').hide();
        $('#about').css('display', 'inline-block');
    }.bind(this));

    $('.classes-link').on('click', function(){
        $('.container > section').hide();
        $('#classes').css('display', 'inline-block');
    }.bind(this));

    //show and hide different blog posts 
    $('#sidebar li').on('click', function(evt){
        var href = $(evt.target).attr('href');
        $('.container > section').hide();
        $('#blog').css('display', 'inline-block');
        $('#blog > article').hide();
        $(href).show();
    }.bind(this));

    //click handlers

    $('button').on('click', function(){
        $('button').hide();
        $('#jquery-msg').show();
        console.log('<button> clicked');
        console.log('if this app had a server, information indicating that the blog post had been "liked" would be sent to the server right now.');
    }.bind(this));

    $('#jquery-msg').on('click', function(){
        $('#jquery-msg').hide();
        $('button').show();
        console.log('<p> with id "jquery-msg" clicked');
        console.log('if this app had a server, information indicating that the blog post had been "liked" would be sent to the server right now.');
    }.bind(this));
})