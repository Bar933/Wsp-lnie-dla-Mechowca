document.addEventListener('DOMContentLoaded', function() {
  // Funkcja otwierająca/zamykająca dropdown po kliknięciu
  function toggleDropdown(event) {
    event.stopPropagation(); // Zapobiega propagacji kliknięcia na inne elementy

    const dropdown = event.target.closest('.dropdown'); // Wyszukaj najbliższy rodzicielski element o klasie 'dropdown'
    dropdown.classList.toggle('active'); // Przełączanie aktywności menu
  }

  // Funkcja zamykająca wszystkie rozwijane menu po kliknięciu poza nimi
  function closeDropdowns(event) {
    const dropdowns = document.querySelectorAll('.dropdown.active'); // Znajdź wszystkie aktywne menu

    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active'); // Jeśli kliknięto poza menu, zamknij je
      }
    });
  }

  // Dodajemy event listener do kliknięcia na elementy rozwijane
  const dropdowns = document.querySelectorAll('.dropdown > a');
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', toggleDropdown); // Obsługuje kliknięcia w menu
  });

  // Zamknij menu jeśli klikniesz poza nimi
  document.addEventListener('click', closeDropdowns);
});
