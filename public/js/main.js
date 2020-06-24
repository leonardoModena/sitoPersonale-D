$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        licenseKey: '12A17E0E-01C34A10-AA62E6F2-562D6154',

        onLeave: function(index, nextIndex, direction) {
            //after leaving section 2
            if (index.index === 0 && direction === 'down') {
                $('.card').removeClass("moveUpText").addClass("moveDownText");
                $('.card-photo').removeClass("moveDownPhoto").addClass("moveUpPhoto");
            } else if (index.index === 1 && direction === 'up') {
                $('.card').removeClass("moveDownText").addClass("moveUpText");
                $('.card-photo').removeClass("moveUpPhoto").addClass("moveDownPhoto");
            }

            if (index.index === 1 && direction === 'down') {
                $('#slide1').css("background-color", "unset");
                $('.card-photo').addClass("fallingBall");
                setTimeout(() => {
                    $('.card-photo').addClass("staticBall");
                }, 480);
                setTimeout(() => {
                    $('.card-photo').addClass("openBall");
                }, 600);
                setTimeout(() => {
                    $('#slide1').css("background-color", "#0d0206a8");

                }, 1200);
                setTimeout(() => {
                    $('.card-photo').addClass("opacity0");
                    $('.project').show();
                }, 1400);
                setTimeout(() => {
                    $('.card-photo').hide();
                    $('.card-photo').addClass("opacity1");
                    $('.card-photo').removeClass('openBall');
                    $('.card-photo').removeClass('staticBall');
                    $('.card-photo').removeClass('fallingBall');

                }, 1401);
                setTimeout(() => {
                    $('.card-photo').show();
                    $('.card-photo').removeClass('opacity0');
                    $('.card-photo').addClass("opacity1");
                }, 1451);
            } else if (index.index === 2 && direction === 'up') {
                $('#slide1').css("background-color", "unset");
            }

        },
    });

    $('#video-background').vide('/vid/background.mp4', {
        muted: true,
        loop: true,
        autoplay: true,
        resizing: true,
        bgColor: 'transparent',
    });

});


document.querySelector('#moveAboutMe').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.moveTo(2);
});

document.querySelector('#moveMyWorks').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.moveTo(3);
});

document.querySelector('#drasticLogo').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.moveTo(1);
});