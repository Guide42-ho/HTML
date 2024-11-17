// จัดการการเปิด/ปิดเมนู
document.querySelector('.toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
