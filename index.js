const API = 'https://rickandmortyapi.com/api';
const characterAPI = `${API}/character`;

const queryInput = document.getElementById('searchQuery');
queryInput.addEventListener('keydown', handleKeyDown);

document
  .getElementById('searchButton')
  .addEventListener('click', handleSearchClick);

function displayCharacters(characterList) {
  const resultList = document.getElementById('searchResults');
  resultList.innerHTML = '';

  if (characterList !== undefined) {
    characterList.forEach((character) => {
      const item = document.createElement('li');
      item.innerText = character.name;
      resultList.append(item);
    });
  } else {
    resultList.innerHTML = '<strong>No results</strong>';
  }
}

function handleSearchClick() {
  const nameQuery = queryInput.value;

  fetch(`${characterAPI}?name=${nameQuery}`)
    .then((res) => res.json())
    .then((json) => displayCharacters(json.results))
    .catch((err) => console.log(err));

  queryInput.value = '';
}

function handleKeyDown(e) {
  if (e.key === 'Enter') {
    handleSearchClick();
  }
}