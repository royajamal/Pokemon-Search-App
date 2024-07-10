document.getElementById('search-button').addEventListener('click', async () => {
  const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Pokémon not found');
    }
    const data = await response.json();

    // Clear previous data
    clearPokemonData();

    // Update Pokémon data
    document.getElementById('pokemon-name').innerText = data.name.toUpperCase();
    document.getElementById('pokemon-id').innerText = `#${data.id}`;
    document.getElementById('weight').innerText = `Weight: ${data.weight}`;
    document.getElementById('height').innerText = `Height: ${data.height}`;

    // Add sprite image
    const spriteImg = document.createElement('img');
    spriteImg.id = 'sprite';
    spriteImg.src = data.sprites.front_default;
    document.getElementById('sprite-img').appendChild(spriteImg);

    // Add Pokémon types
    const typesElement = document.getElementById('types');
    data.types.forEach((type) => {
      const typeElement = document.createElement('span');
      typeElement.innerText = type.type.name.toUpperCase();
      typesElement.appendChild(typeElement);
    });

    // Update stats
    document.getElementById('hp').innerText = data.stats.find((stat) => stat.stat.name === 'hp').base_stat;
    document.getElementById('attack').innerText = data.stats.find((stat) => stat.stat.name === 'attack').base_stat;
    document.getElementById('defense').innerText = data.stats.find((stat) => stat.stat.name === 'defense').base_stat;
    document.getElementById('special-attack').innerText = data.stats.find((stat) => stat.stat.name === 'special-attack').base_stat;
    document.getElementById('special-defense').innerText = data.stats.find((stat) => stat.stat.name === 'special-defense').base_stat;
    document.getElementById('speed').innerText = data.stats.find((stat) => stat.stat.name === 'speed').base_stat;
  } catch (error) {
    alert('Pokémon not found');
    clearPokemonData();
  }
});

function clearPokemonData() {
  document.getElementById('pokemon-name').innerText = '';
  document.getElementById('pokemon-id').innerText = '';
  document.getElementById('weight').innerText = '';
  document.getElementById('height').innerText = '';
  document.getElementById('types').innerText = '';
  document.getElementById('sprite-img').innerHTML = '';
  document.getElementById('hp').innerText = '';
  document.getElementById('attack').innerText = '';
  document.getElementById('defense').innerText = '';
  document.getElementById('special-attack').innerText = '';
  document.getElementById('special-defense').innerText = '';
  document.getElementById('speed').innerText = '';
}