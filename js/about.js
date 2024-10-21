
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    // إضافة أو إزالة class "active" لإظهار أو إخفاء القائمة الجانبية
    sidebar.classList.toggle("active");
  }
  
  // إضافة زر الـ "X" لغلق القائمة الجانبية
  document.getElementById("closeSidebar").addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("active");
  });
  
  // إضافة وظيفة الـ toggle على زر الـ hamburger
  document.getElementById("navbar-toggler").addEventListener("click", toggleMenu);
  
  // الحصول على الـ navbar
  const navbar = document.getElementById('navbar');
  
  // إضافة أو إزالة الكلاس عند النزول في الصفحة
  window.onscroll = function() {
    if (window.scrollY > 50) { // تغيير اللون عندما تتجاوز 50 بيكسل في النزول
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
    
  
  