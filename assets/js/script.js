// สร้าง HTML ของ Header
const headerHTML = `
  <div class="container d-flex justify-content-between align-items-center">
      <img src="/img/logo.gif" alt="โลโก้รัฐบาลพรรคเพื่อไทย" height="50">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" onclick="toggleIcon(this)">
          <i class="fa-solid fa-bars"></i>
      </button>
      <nav class="collapse navbar-collapse" id="navbarNav">
          <ul class="nav flex-column flex-lg-row text-center w-100 justify-content-center">
              <li class="nav-item"><a class="nav-link text-dark" href="#">หน้าแรก</a></li>
              <li class="nav-item"><a class="nav-link text-dark" href="#">นโยบาย</a></li>
              <li class="nav-item"><a class="nav-link text-dark" href="#">ข่าวสาร</a></li>
              <li class="nav-item"><a class="nav-link text-dark" href="#">ติดต่อ</a></li>
          </ul>
      </nav>
  </div>
`;


// เมื่อโหลดหน้าเสร็จให้แทรก HTML ทันที
window.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const mobileMenu = document.getElementById("mobileMenu");

  header.innerHTML = headerHTML;
  mobileMenu.innerHTML = mobileMenuHTML;
});
