function burgerMenu() {
    let menu = $('.hamburger'),
        button = document.getElementsByClassName('hamburger_button')[0],
        links = document.getElementsByClassName('hamburger')[0],
        overlay = document.getElementsByClassName('hamburger_overlay')[0];

        button.addEventListener('click', function(event) {
            event.preventDefault();
            toggleMenu();
        });
        links.addEventListener('click', function() {
            toggleMenu();
        });
        overlay.addEventListener('click', function() {
            toggleMenu();
        });

        function toggleMenu() {
            menu.toggleClass('hamburger_active');
            if (menu.hasClass('hamburger_active')) {
            $('body').css('overflow', 'hidden');
            } else {
                $('body').css('overflow', 'visible');
            }
        }
}
burgerMenu ('.hamburger');