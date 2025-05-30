export async function getCountryByName(name) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`);
  return response.json();
}