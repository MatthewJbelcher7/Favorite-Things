window.addEventListener("load", function() {
  const form = document.getElementById("favForm");
  form.addEventListener("submit", submitInput); 
});
function favoriteThings() {
    const favoriteAnimal = document.getElementById("favoriteAnimal").value;
    const favoriteColor = document.getElementById("favoriteColor").value;
    const favoriteNinjaTurtle = document.getElementById("favoriteNinjaTurtle").value;
    const favoriteIceCream = document.getElementById("favoriteIceCream").value;
    const favoriteSeason = document.getElementById("favoriteSeason").value;

  const favThings = [favoriteColor, favoriteSeason, favoriteNinjaTurtle, favoriteIceCream, favoriteAnimal];
  return favThings;
};

function submitInput(event) {
  event.preventDefault();
  favThings = favoriteThings();
  const onlyThree =[];
  onlyThree.push(favThings[1],favThings[0],favThings[2]);
  console.log(onlyThree);
};

