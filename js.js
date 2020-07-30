$(document).ready(function(){
    $("a.scroll").on('click', function(event){

        var hash = this.hash;

       $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){});
    });
    var wow = new WOW({
        mobile:false
    });

    wow.init();
});
var vid = document.getElementById("closeVideo");

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}