const MAX_FAVORITES = 20;
const STORAGE_KEY = 'geoexplorer_favorites';

export function getFavorites() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

export function saveFavorites(favs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
}

export function isFavorite(country) {
  return getFavorites().some(f => f.name === country.name.common);
}

export function addFavorite(country) {
  let favs = getFavorites();
  if (favs.some(f => f.name === country.name.common) || favs.length >= MAX_FAVORITES) return;
  favs.push({ name: country.name.common, flag: country.flags.svg });
  saveFavorites(favs);
  renderFavorites();
}

export function removeFavorite(country) {
  let favs = getFavorites().filter(f => f.name !== country.name.common);
  saveFavorites(favs);
  renderFavorites();
}

export function renderFavorites() {
  const favList = document.getElementById('favList');
  favList.innerHTML = '';
  const favs = getFavorites();

  // décompte le nombre de favoris
  const h1 = document.querySelector('.headerLeft h1');
  if (h1) {
    h1.textContent = `Favoris (${favs.length}/20):`;
  }

  favs.forEach(fav => {
    const li = document.createElement('li');
    li.title = fav.name;

    const btn = document.createElement('button');
    btn.style.background = 'none';
    btn.style.border = 'none';
    btn.style.padding = '0';
    btn.style.cursor = 'pointer';
    btn.title = fav.name;

    btn.innerHTML = `<img src="${fav.flag}" alt="Flag of ${fav.name}" width="20">`;

    btn.addEventListener('click', () => {
      document.getElementById('countryInput').value = fav.name;
      document.getElementById('searchBtn').click();
    });

    li.appendChild(btn);
    favList.appendChild(li);
  });
}