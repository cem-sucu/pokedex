import React, { FunctionComponent, useState, useEffect } from "react";
import Pokemon from "./models/pokemon";
import "./app.css";
import POKEMONS from "./models/mock-pokemon";
import pokemonlogo from "./pokemon.png";

const App: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return (
        <div>
            <h1 className="center">
                <img src={pokemonlogo} width="300" alt="pokémonLogo" />
            </h1>
            <div className="container">
                <div className="row">
                    {pokemons.map(({ id, name, picture, created }) => (
                        <div className="col s6 m4" key={id}>
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={picture} alt={name} />
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <h6>{name}</h6>
                                        <p>
                                            <small>{created.toString()}</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
