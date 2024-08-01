
import { useState } from "react";
import axios from "axios";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
        .then(response => setPokemon(response.data.results))
    };

    return (
        <>
            <h1>Pokemon ({pokemon.length})</h1>
            <button onClick={getPokemon}>Show Pokemon</button>
            <div>
                {pokemon.length > 0 && pokemon.map((poke, index) => (
                    <div key={index}>{poke.name}</div>
                ))}
            </div>
        </>
    );
};

export default Pokemon;