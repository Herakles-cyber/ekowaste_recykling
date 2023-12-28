const nav = document.querySelector('.navbar-collapse')

document.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
        nav.classList.remove('show')
    }
})




// Dynamiczne ustawianie aktualnego roku
document.getElementById('current-year').textContent = new Date().getFullYear();

// Kod JavaScript do wyłączenia linku
document.getElementById("disabled-link").addEventListener("click", function (event) {
    event.preventDefault(); // Zapobiegaj domyślnej akcji kliknięcia
});


// document.addEventListener("DOMContentLoaded", function () {
//     // Znajdź wszystkie linki w nawigacji
//     const navLinks = document.querySelectorAll('.navbar-nav a');

//     // Dodaj obsługę zdarzenia kliknięcia dla każdego linku
//     navLinks.forEach(link => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();

//             // Pobierz identyfikator sekcji z atrybutu href
//             const targetId = this.getAttribute('href').substring(1);

//             // Znajdź docelową sekcję na podstawie identyfikatora
//             const targetElement = document.getElementById(targetId);

//             // Sprawdź, czy sekcja istnieje
//             if (targetElement) {
//                 // Pobierz wysokość nawigacji
//                 const navbarHeight = document.querySelector('.navbar').offsetHeight;

//                 // Płynne przewijanie do sekcji
//                 if (window.innerWidth < 500) {
//                     window.scrollTo({
//                         top: targetElement.offsetTop - navbarHeight + 250,
//                         behavior: 'smooth'
//                     })
//                 } else {
//                     window.scrollTo({
//                         top: targetElement.offsetTop - navbarHeight,
//                         behavior: 'smooth'
//                     })
//                 }
//             }
//         });
//     });
// });

