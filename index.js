//DESARROLLA AQUI TUS SOLUCIONES
//EJERCICIO 1
async function getRandomPokemon() {
  let randomNum = parseInt(Math.random() * 150);
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
  let data = await response.json();
  return data;
}

getRandomPokemon()
  .then((data) => console.log(data))
  .catch((error) => console.log("hubo un error" + error));

//EJERCICIO 2
async function getImageAndName() {
  let randomNum = parseInt(Math.random() * 150);
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
  let data = await response.json();
  let name = data.name;
  let img = data.sprites.front_default;

  let imageAndName = { name, img };
  return imageAndName;
}

//EJERCICIO 3
async function printImageAndName() {
  let randomNum = parseInt(Math.random() * 150);
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
  let data = await response.json();
  let name = data.name;
  let img = data.sprites.front_default;

  return `<section>
              <img src="${img}" alt="${name}">
              <h1>${name}</h1>
          </section>`;
}

//EJERCICIO 4
async function getRandomDogImage() {
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  let data = await response.json();

  return await data.message;
}

//EJERCICIO 5

async function getRandomPokemonImage() {
  let randomNum = parseInt(Math.random() * 150);
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
  let data = await response.json();
  let img = await data.sprites.front_default;

  return await img;
}

//EJERCICIO 6

async function printPugVsPikachu() {
  const imgPok = await getRandomPokemonImage();
  const imgDog = await getRandomDogImage();
  let battle = `<img src="${imgPok}" alt=""><p>VS</p><img src="${imgDog}" alt="">`;
  console.log(battle);
  document.body.innerHTML += battle;
}

//EJERCICIO 7

async function getRandomCharacter() {
  let randomNum = parseInt(Math.random() * 826);
  let response = await fetch(
    `https://rickandmortyapi.com/api/character/${randomNum}`
  );
  let character = await response.json();

  return character;
}

//Ejercicio 8

async function getRandomCharacterInfo() {
  let randomNum = parseInt(Math.random() * 826);
  let response = await fetch(
    `https://rickandmortyapi.com/api/character/${randomNum}`
  );
  let character = await response.json();
  let img = character.image;
  let name = character.name;
  let episodes = character.episode;

  let firstEpisodeResp = await fetch(character.episode[0]);
  let firstEpisodeJson = await firstEpisodeResp.json();
  let firstEpisode = firstEpisodeJson.name;
  let dateEpisode = firstEpisodeJson.air_date;
  let card = `<section class="card">
                  <img src="${img}" alt="Imagen de ${name}"></img>
                  <div class="data">
                      <h1>${name}</h1>
                      <p>Appears in ${episodes} episodes</p>
                      <p>First episode: ${firstEpisode}</p>
                      <p>Air date: ${dateEpisode}</p>
                  </div>
              </section>`;

  document.body.innerHTML += card;

  return { img, name, episodes, firstEpisode, dateEpisode };
}
