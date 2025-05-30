let countryNames = [];

async function fetchAllCountryNames() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  countryNames = data.map(c => c.name.common).sort();
}
fetchAllCountryNames();
// Remplacer l'id countryInput par celle du champ de saisie de l'html
const input = document.getElementById('countryInput');
const suggestionBox = document.createElement('ul');
suggestionBox.style.position = 'absolute';
suggestionBox.style.background = '#fff';
suggestionBox.style.color = '#000';
suggestionBox.style.margin = '0';
suggestionBox.style.padding = '0';
suggestionBox.style.listStyle = 'none';

input.parentNode.appendChild(suggestionBox);

input.addEventListener('input', function() {
  suggestionBox.style.top = (input.offsetTop + input.offsetHeight) + 'px';

  const value = input.value.trim().toLowerCase();
  suggestionBox.innerHTML = '';
  if (!value) return;
  const matches = countryNames.filter(name => name.toLowerCase().startsWith(value));
  matches.slice(0, 5).forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    li.style.padding = '0.5rem';
    li.style.borderBottom = '1px solid #eee';
    li.style.color = '#000'; 
    li.addEventListener('mousedown', function(e) {
      e.preventDefault();
      input.value = name;
      suggestionBox.innerHTML = '';
    });
    suggestionBox.appendChild(li);
  });
});

// zzzzza


let zsdc = [];

async function fetchAllCountryNames() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  countryNames = data.map(c => c.name.common).sort();
}
fetchAllCountryNames();
// Remplacer l'id countryInput par celle du champ de saisie de l'html
const ez = document.getElementById('countryInput');
const suggestionBox = document.createElement('ul');
suggestionBox.style.position = 'absolute';
suggestionBox.style.background = '#fff';
suggestionBox.style.color = '#000';
suggestionBox.style.margin = '0';
suggestionBox.style.padding = '0';
suggestionBox.style.listStyle = 'none';

input.parentNode.appendChild(suggestionBox);

input.addEventListener('input', function() {
  suggestionBox.style.top = (input.offsetTop + input.offsetHeight) + 'px';

  const value = input.value.trim().toLowerCase();
  suggestionBox.innerHTML = '';
  if (!value) return;
  const matches = countryNames.filter(name => name.toLowerCase().startsWith(value));
  matches.slice(0, 5).forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    li.style.padding = '0.5rem';
    li.style.borderBottom = '1px solid #eee';
    li.style.color = '#000'; 
    li.addEventListener('mousedown', function(e) {
      e.preventDefault();
      input.value = name;
      suggestionBox.innerHTML = '';
    });
    suggestionBox.appendChild(li);
  });
});