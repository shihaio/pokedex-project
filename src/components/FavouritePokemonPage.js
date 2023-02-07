import React from "react";

function FavouritePokemonPage() {
  return <div>{JSON.parse(localStorage.getItem("pokemonFavListX"))}</div>;
}

export default FavouritePokemonPage;
