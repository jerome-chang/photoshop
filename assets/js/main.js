$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $('#fading').height();

    $('#fading').css({
        'opacity': ((height - scrollTop) / height)
    });
});



var $back_to_top = $('a.gotoheader');
$(window).on('scroll', function () {
    if (window.scrollY > 200) {
        $back_to_top.addClass('active');
    } else {
        $back_to_top.removeClass('active');

    }

});


$(function () {
    // 幫 a.abgne_gotoheader 加上 click 事件
    $('a.gotoheader').click(function () {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 0
        }, 600);

        return false;
    });
});





$(document).ready(function(){
    $("#finalBtn").click(function(){
        $(".popup").css('display','block'); 
        $(".popup h1").css('opacity','1'); 
    });
    $(".popup .closebtn").click(function(){
        $(".popup").hide();
      });    
  });





(function (window, document) {
    var menu = document.getElementById('menu'),
        rollback,
        WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange' : 'resize';

    function toggleHorizontal() {
        menu.classList.remove('closing');
        [].forEach.call(
            document.getElementById('menu').querySelectorAll('.custom-can-transform'),
            function (el) {
                el.classList.toggle('pure-menu-horizontal');
            }
        );
    };

    function toggleMenu() {
        // set timeout so that the panel has a chance to roll up
        // before the menu switches states
        if (menu.classList.contains('open')) {
            menu.classList.add('closing');
            rollBack = setTimeout(toggleHorizontal, 500);
        }
        else {
            if (menu.classList.contains('closing')) {
                clearTimeout(rollBack);
            } else {
                toggleHorizontal();
            }
        }
        menu.classList.toggle('open');
        document.getElementById('toggle').classList.toggle('x');
    };

    function closeMenu() {
        if (menu.classList.contains('open')) {
            toggleMenu();
        }
    }

    document.getElementById('toggle').addEventListener('click', function (e) {
        toggleMenu();
        e.preventDefault();
    });

    window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
})(this, this.document);