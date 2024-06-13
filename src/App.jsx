import { useState, useEffect } from "react";
import { Navbar, PokeCard } from "./components";
import { getPokemons } from "./utils";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getPokemons();
      setPokemons(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar searchTerm={searchTerm} onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center p-4">
        {isLoading ? (
          <p className="text-xl">Loading...</p>
        ) : filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <p className="text-xl">No Pokemon found</p>
        )}
      </div>
    </div>
  );
};

export default App;
