var button = document.getElementById("dropdown-button");
var dropdown = document.getElementById('dropdown');


function toggleMenu () {
  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'block';
  } else {
    dropdown.style.display = 'none';
  }
}

button.addEventListener("click", toggleMenu);
