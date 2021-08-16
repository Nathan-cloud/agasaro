// Filter Search
function booksFilter() {
  let input = document.getElementById('input-search').value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName('col-lg-2');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = 'none';
    } else {
      x[i].style.display = '';
    }
  }
}
