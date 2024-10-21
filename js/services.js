AOS.init();
// contact
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent!');
});

document.querySelectorAll('.faq-title').forEach(button => {
  button.addEventListener('click', () => {
    const faq = button.parentElement;
    const allFaqs = document.querySelectorAll('.faq-item');

    // Close all other faq-items
    allFaqs.forEach(item => {
      if (item !== faq) {
        item.classList.remove('active');
        item.querySelector('.faq-content').style.display = 'none';
        item.querySelector('.arrow').style.transform = 'rotate(0deg)';
      }
    });

    // Toggle the clicked faq-item
    faq.classList.toggle('active');
    const faqContent = faq.querySelector('.faq-content');

    if (faq.classList.contains('active')) {
      faqContent.style.display = 'block';
      faq.querySelector('.arrow').style.transform = 'rotate(90deg)';
    } else {
      faqContent.style.display = 'none';
      faq.querySelector('.arrow').style.transform = 'rotate(0deg)';
    }
    
  });
});

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
  
function validateForm() {
  let phone = document.getElementById("phone").value;
  let phonePattern = /^\+?\d{1,4}\s?\d{1,3}\s?\d{3}\s?\d{3}\s?\d{2}$/;
  
  if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number.");
      return false;
  }

  return true;  // Form is valid
}