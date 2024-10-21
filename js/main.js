
AOS.init();
// contact
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent!');
});

// وظيفة التحكم في إظهار وإخفاء القائمة الجانبية
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
function validateForm() {
  let phone = document.getElementById("phone").value;
  let phonePattern = /^\+?\d{1,4}\s?\d{1,3}\s?\d{3}\s?\d{3}\s?\d{2}$/;
  
  if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number.");
      return false;
  }

  return true;  // Form is valid
}
let btn = document.getElementById("btn");
window.onscroll = function () {
    if (window.scrollY >= 400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
btn.onclick = function () {
    this.scroll({
        left: 0,
        top: 0,
        behavior: "smooth"

    })
}
window.addEventListener('load', function() {
  // إخفاء الـ loader بعد التحميل
  const loader = document.querySelector('.loading-slide');
  loader.classList.add('hide');

  // تفعيل الأنيميشن الخاص بصفحة الهوم
  const homeSection = document.querySelector('.secondSection'); // أو القسم الذي يحتوي على الأنيميشن
  homeSection.classList.add('animate'); 
});

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
      document.querySelector(".loader").style.opacity = "0";
      document.querySelector(".loading-slide").style.display = "none"; // Hide after fading out
  }, 4000);
});

// pricing page

function invesibleBorder() {
  const first = document.querySelectorAll('.awards-right .first');
  const second = document.querySelectorAll('.awards-right .second');

  const screenWidth = window.innerWidth;

  first.forEach(element => {
      if (screenWidth <= 990) {
          element.style.borderRight = 'none';


      } else {
          element.style.borderRight = '1px solid #dee2e6';


      }
  });
  second.forEach(element => {
      if (screenWidth <= 990) {
          element.style.borderRight = 'none';


      } else {
          element.style.borderRight = '1px solid #dee2e6';


      }
  });

}

invesibleBorder();
window.addEventListener('resize', invesibleBorder);
