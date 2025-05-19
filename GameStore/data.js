const games = [
  {
    id: 1,
    title: "Gran Turismo 7",
    price: 59.99,
    sales: 1200,
    rating: 4.8,
    image: "top10/gran-turismo.jpg",
    platforms: ["PS5"]
  },
  {
    id: 2,
    title: "Spiderman",
    price: 49.99,
    sales: 1800,
    rating: 4.9,
    image: "top10/spiderman.jpg",
    platforms: ["PS5", "PC"]
  },
  {
    id: 3,
    title: "Bloodborne",
    price: 49.99,
    sales: 1800,
    rating: 4.9,
    image: "top10/bloodborne.jpg",
    platforms: ["PS4"]
  },
  {
    id: 4,
    title: "The Last of Us",
    price: 49.99,
    sales: 1800,
    rating: 4.9,
    image: "top10/the-last-of-us.jpg",
    platforms: ["PS4", "PS5", "PC"]
  },
  {
    id: 5,
    title: "God of War",
    price: 49.99,
    sales: 1800,
    rating: 4.9,
    image: "top10/god-of-war.png",
    platforms: ["PS5", "PC"]
  },
  {
    id: 6,
    title: "Uncharted",
    price: 49.99,
    sales: 1800,
    rating: 4.9,
    image: "top10/uncharted.jpg",
    platforms: ["PS4", "PS5", "PC"]
  },
  {
    id: 7,
    title: "Sackboy",
    price: 49.99,
    sales: 1800,
    rating: 4.9,
    image: "top10/sackboy.jpg",
    platforms: ["PS4", "PS5"]
  },
  {
    id: 8,
    title: "Ghost of Tsushima",
    price: 49.99,
    sales: 1800,
    rating: 4.9,
    image: "top10/ghost-of-tsushima.jpg",
    platforms: ["PS5", "PC"]
  },
  {
    id: 9,
    title: "Days Gone",
    price: 49.99,
    sales: 1800,
    rating: 4.9,
    image: "top10/days-gone.jpg",
    platforms: ["PS5", "PC"]
  },
  {
    id: 10,
    title: "Death Stranding",
    price: 49.99,
    sales: 1800,
    rating: 4.9,
    image: "top10/death-stranding.jpg",
    platforms: ["PS5", "PC"]
  }
];


function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function setCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getGameByTitle(title) {
  return games.find(game => game.title === title);
}
