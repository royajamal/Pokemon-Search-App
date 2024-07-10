document.getElementById("search-button").addEventListener("click", async function() {
  const searchInput = document.getElementById("search-input").value.trim().toLowerCase();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Pokémon not found");
    }
    const data = await response.json();

    // Clear previous data
    clearPokemonData();

    // Update Pokémon data
    document.getElementById("pokemon-name").innerText = data.name.toUpperCase();
    document.getElementById("pokemon-id").innerText = `#${data.id}`;
    document.getElementById("weight").innerText = `Weight: ${data.weight}`;
    document.getElementById("height").innerText = `Height: ${data.height}`;