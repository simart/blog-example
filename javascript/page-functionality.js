$(function(){
    //show and hide different content based on the link clicked
    $('.blog-link').on('click', function(){
        $('section').hide();
        $('.blog').show();
    }.bind(this));

    $('.about-link').on('click', function(){
        console.log('about clicked');
        $('section').hide();
        $('.about').show();
    }.bind(this));

    $('.classes-link').on('click', function(){
        $('section').hide();
        $('.classes').show();
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