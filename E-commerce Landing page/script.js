window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {  // Adjust the scroll value as needed
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});

document.querySelector('.pesan-sekarang').addEventListener('click', function() {
    document.querySelector('#new-arrivals').scrollIntoView({behavior: 'smooth'});
});

document.querySelector('.beli-sekarang').addEventListener('click',function() {
    document.querySelector('#our-products').scrollIntoView({behavior: 'smooth'});
})

document.querySelector('').addEventListener('click', function() {
    document.querySelector('#').scrollIntoView({behavior:'smooth'})
})