const purpleDiv = document.querySelector('div');
const inputF = document.querySelector('input');

inputF.addEventListener("focus", function() {
  purpleDiv.style.display = 'block';
})
inputF.addEventListener("blur", function() {
  purpleDiv.style.display = 'none';
})