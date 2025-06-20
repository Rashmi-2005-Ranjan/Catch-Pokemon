import { useEffect, useState } from "react";
import "../index.css";
import PokemonCards from "./PokemonCards";
import Loading from "./Loading";
import Error from "./Error";

const Pokemon = () => {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=501";
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = await Promise.all(
        data.results.map(async (currPokemon) => {
          const res = await fetch(currPokemon.url);
          const data = await res.json();
          return data;
        })
      );

      setPokemon(detailedPokemonData); // Now you're setting the resolved data
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.error("Error fetching Pokemon data:", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  //*Handle search functionality
  const searchData = pokemon.filter((currPokemon) =>
    currPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  //*Handle loading state
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  //*Handle error state
  if (error) {
    return <Error errorMessage={error} />;
  }
  return (
    <>
      <section className="container">
        <header>
          <h1>Let's Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search Pokemon....."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {searchData.map((currPokemon) => {
              return (
                <PokemonCards key={currPokemon.id} pokemonData={currPokemon} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
export default Pokemon;
