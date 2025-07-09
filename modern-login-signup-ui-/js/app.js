
  const container = document.getElementById('container');
  const registerBtn = document.getElementById('register');
  const loginBtn = document.getElementById('login');

  registerBtn.addEventListener('click', () => {
    container.classList.add("active");
  });

  loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
  });



 const form = document.getElementById('register-form');

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!firstName || !email || !password) {
    alert("Iltimos, barcha maydonlarni to'ldiring!");
    return;
  }

  if (!validateEmail(email)) {
    alert("Email noto'g'ri kiritilgan!");
    return;
  }

  if (password.length < 6) {
    alert("Parol kamida 6 ta belgidan iborat bo'lishi kerak!");
    return;
  }

  alert("Ro'yxatdan o'tish muvaffaqiyatli yakunlandi! ✅");
  form.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

const form2 = document.getElementById('login-form');

form2.addEventListener("submit", function(e){
  e.preventDefault();

  const email2 = document.getElementById('email2');
  const password2 = document.getElementById('password2');

  const email = email2.value.trim();
  const password = password2.value.trim();

  if (!email || !password) {
    alert("Iltimos, barcha maydonlarni to'ldiring!");
    return;
  }

  if (!validateEmail(email)) {
    alert("Email noto'g'ri kiritilgan!");
    return;
  }

  if (password.length < 6) {
    alert("Parol kamida 6 ta belgidan iborat bo'lishi kerak!");
    return;
  }

  alert("Kirish muvaffaqiyatli amalga oshirildi! ✅");
  form2.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
