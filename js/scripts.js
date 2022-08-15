window.addEventListener("load", function() {
  const form = document.getElementById("favForm");
  form.addEventListener("submit", favoriteThings); 
});
function favoriteThings() {
    const favoriteAnimal = document.getElementById("favoriteAnimal").value;
    const favoriteColor = document.getElementById("favoriteColor").value;
    const favoriteNinjaTurtle = document.getElementById("favoriteNinjaTurtle").value;
    const favoriteIceCream = document.getElementById("favoriteIceCream").value;
    const favoriteSeason = document.getElementById("favoriteSeason").value;

  let favThings = [favoriteColor, favoriteSeason, favoriteNinjaTurtle, favoriteIceCream, favoriteAnimal];
  console.log("array has been created");
  return favThings;
};