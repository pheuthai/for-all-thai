// script.js
document.addEventListener("DOMContentLoaded", function() {
    // ลบหน้าจอโหลดเมื่อหน้าโหลดเสร็จ
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', function() {
        preloader.style.display = 'none';
    });
});
