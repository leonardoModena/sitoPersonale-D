$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        licenseKey: '12A17E0E-01C34A10-AA62E6F2-562D6154',

        onLeave: function(index, nextIndex, direction) {
            //after leaving section 2
            if (index.index == 0 && direction == 'down') {
                $('.card').removeClass("moveUpText").addClass("moveDownText");
                $('.card-photo').removeClass("moveDownPhoto").addClass("moveUpPhoto");
            } else if (index.index == 1 && direction == 'up') {
                $('.card').removeClass("moveDownText").addClass("moveUpText");
                $('.card-photo').removeClass("moveUpPhoto").addClass("moveDownPhoto");
            }

            if (index.index == 1 && direction == 'down') {
                $('.project').hide();
                $('.card-photo').addClass("fallingBall");
                setTimeout(() => {
                    $('.card-photo').addClass("staticBall");
                }, 480);
                setTimeout(() => {
                    $('.card-photo').addClass("openBall");
                }, 680);
                setTimeout(() => {
                    $('.card-photo').addClass("opacity0");
                    $('.project').show();
                }, 1480);
                setTimeout(() => {
                    $('.card-photo').hide();
                    $('.card-photo').addClass("opacity1");
                    $('.card-photo').removeClass('openBall');
                    $('.card-photo').removeClass('staticBall');
                    $('.card-photo').removeClass('fallingBall');

                }, 2581);
                setTimeout(() => {
                    $('.card-photo').show();
                    $('.card-photo').removeClass('opacity0');
                    $('.card-photo').addClass("opacity1");
                }, 3281);
            } else if (index.index == 2 && direction == 'up') {

            }

        },
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