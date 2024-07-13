import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Pokemon = () => {

    // i did not get any image url in this apis so i redirct on that url  
    // i did not know the deadline of the assinment so i am not focus on ui I can make ui more better 
    // Thanks 
  const { data, isLoading, error, } = useQuery({
    queryKey: "pokemons",
    queryFn: async () => {
      const data = await axios.get("https://pokeapi.co/api/v2/pokemon");
      return data.data.results;
    },
    staleTime: 10000,
  });

//   console.log(data);

  if(error){
    return         <h1 className="text-white">{error.message}</h1>
  }

  if(isLoading) {
    return(
        <h1 className="text-white">Loading...</h1>
    )
  }

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 bg-black w-full h-full">
        {data.map((pokemon) => (
          <div className="" key={pokemon.url}>
            <div className="block rounded-xl border bg-pink-700 border-gray-800 p-4">


              <h2 className="mt-2 font-semibold text-base sm:text-lg text-white uppercase">
                {pokemon.name}
              </h2>
              <a href={pokemon.url}>
              <button className="bg-black text-white p-3 mt-1 rounded-md">
                Learn More
              </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pokemon;
