export async function getCountryByName(name) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération du pays');
  }
  return response.json();
}