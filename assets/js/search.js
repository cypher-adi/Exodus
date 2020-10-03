const gamesList = document.getElementById('gamesList');
const searchBar = document.getElementById('searchBar');
let spgames = [];

searchBar.addEventListener('keyup', (e) => {
  console.log('search start');
  const searchString = e.target.value.toLowerCase();

  const filteredgames = spgames.filter((game) => {
    return game.name.toLowerCase().includes(searchString);
  });
  displaygames(filteredgames);
});

const loadgames = async () => {
  try {
    const res = await fetch('./assets/js/gamesList.json');
    spgames = await res.json();
    displaygames(spgames);
  } catch (err) {
    console.error(err);
  }
};

const displaygames = (games) => {
  const htmlString = games
    .map((game) => {
      return `
            <li class="game">
                <h2>${game.name}</h2>
                <p>Price: ${game.price}</p>
                <img src="${game.img}"></img>
                <a href="#">Add to cart</a>
            </li>
        `;
    })
    .join('');
  gamesList.innerHTML = htmlString;
};

loadgames();
