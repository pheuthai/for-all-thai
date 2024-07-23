// script.js
document.addEventListener("DOMContentLoaded", function() {
    // ลบหน้าจอโหลดเมื่อหน้าโหลดเสร็จ
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', function() {
        preloader.style.display = 'none';
    });
});

var header = $('.header');

$(window).scroll(function(e){
    if(header.offset().top !== 0){
        if(!header.hasClass('shadow')){
            header.addClass('shadow');
        }
    }else{
        header.removeClass('shadow');
    }
});
