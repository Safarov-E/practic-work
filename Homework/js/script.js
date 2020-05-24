$(document).ready(function() {
    function handleShow(show) {
        $('.modal').animate({
            opacity: show,
            height: show,
        }, 1000)
    }
    $('.main_btna').on('click', () => { handleShow('show') });
    $('.main_nav a:eq(1)').on('click', () => { handleShow('show') });
    $('.main_btn').on('click', () => { handleShow('show') });

    $('.close').on('click', () => { handleShow('hide') });
})