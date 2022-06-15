// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   useAddSuperHeroData,
//   useSuperHerosData,
// } from "../hooks/useSuperHeroesData";

// add data in db and fetch that data automatically by query invalidation

// const RQSuperHeroesPage = () => {
//   const [name, setName] = useState("");
//   const [alterEgo, setAlterEgo] = useState("");

//   const onSuccess = (data) => {
//     console.log("Perform side effect data fetching", data);
//   };

//   const onError = (error) => {
//     console.log("Perform side effect data encountering error", error);
//   };

//   const { isLoading, data, isError, error, isFetching } = useSuperHerosData(
//     onSuccess,
//     onError
//   );

//   const {
//     mutate: addHero,
//     isLoading: addLoading,
//     isError: addIsError,
//     error: addError,
//   } = useAddSuperHeroData();

//   const handleAddHeroClick = () => {
//     console.log("name,alterEgo :>> ", name, alterEgo);
//     const hero = { name, alterEgo };
//     addHero(hero);
//   };

//   if (isLoading || isFetching || addLoading) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError || addIsError) {
//     return <h2>{isError ? error.message : addError.message}</h2>;
//   }

//   console.log("data :>> ", data);

//   return (
//     <>
//       <h2>RQ Super Heroes Page</h2>
//       <div>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="text"
//           value={alterEgo}
//           onChange={(e) => setAlterEgo(e.target.value)}
//         />
//         <button onClick={handleAddHeroClick}>Add Hero</button>
//       </div>
//       {/* <button onClick={refetch}>Fetch heroes</button> */}
//       {/* {data?.data.map((hero) => {
//         return <div key={hero.name}>{hero.name}</div>;
//       })} */}
//       {data?.data.map((hero) => {
//         return (
//           <div key={hero.id}>
//             <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// add data in db and on buttin click fecth data

// const RQSuperHeroesPage = () => {
//   const [name, setName] = useState("");
//   const [alterEgo, setAlterEgo] = useState("");

//   const onSuccess = (data) => {
//     console.log("Perform side effect data fetching", data);
//   };

//   const onError = (error) => {
//     console.log("Perform side effect data encountering error", error);
//   };

//   const { isLoading, data, isError, error, isFetching, refetch } =
//     useSuperHerosData(onSuccess, onError);

//   const {
//     mutate: addHero,
//     isLoading: addLoading,
//     isError: addIsError,
//     error: addError,
//   } = useAddSuperHeroData();

//   const handleAddHeroClick = () => {
//     console.log("name,alterEgo :>> ", name, alterEgo);
//     const hero = { name, alterEgo };
//     addHero(hero);
//   };

//   if (isLoading || isFetching || addLoading) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError || addIsError) {
//     return <h2>{isError ? error.message : addError.message}</h2>;
//   }

//   console.log("data :>> ", data);

//   return (
//     <>
//       <h2>RQ Super Heroes Page</h2>
//       <div>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="text"
//           value={alterEgo}
//           onChange={(e) => setAlterEgo(e.target.value)}
//         />
//         <button onClick={handleAddHeroClick}>Add Hero</button>
//       </div>
//       <button onClick={refetch}>Fetch heroes</button>
//       {/* {data?.data.map((hero) => {
//         return <div key={hero.name}>{hero.name}</div>;
//       })} */}
//       {data?.data.map((hero) => {
//         return (
//           <div key={hero.id}>
//             <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// const RQSuperHeroesPage = () => {
//   const onSuccess = (data) => {
//     console.log("Perform side effect data fetching", data);
//   };

//   const onError = (error) => {
//     console.log("Perform side effect data encountering error", error);
//   };

//   const { isLoading, data, isError, error, isFetching, refetch } =
//     useSuperHerosData(onSuccess, onError);

//   if (isLoading || isFetching) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }

//   console.log("data :>> ", data);

//   return (
//     <>
//       <h2>RQ Super Heroes Page</h2>
//       <button onClick={refetch}>Fetch heroes</button>
//       {/* {data?.data.map((hero) => {
//         return <div key={hero.name}>{hero.name}</div>;
//       })} */}
//       {data?.data.map((hero) => {
//         return (
//           <div key={hero.id}>
//             <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// Call api on CLick event

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

// const RQSuperHeroesPage = () => {
//   const onSuccess = (data) => {
//     console.log("Perform side effect data fetching", data);
//   };

//   const onError = (error) => {
//     console.log("Perform side effect data encountering error", error);
//   };

//   const results = useQuery("super-heroes", fetchSuperHeroes, {
//     enabled: false,

//     onSuccess,
//     onError,

//     select: (data) => {
//       const superHeroesNames = data.data.map((hero) => hero.name);
//       return superHeroesNames;
//     },
//   });

//   const { isLoading, data, isError, error, isFetching, refetch } = results;

//   if (isLoading || isFetching) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }

//   console.log("data :>> ", data);

//   return (
//     <>
//       <h2>RQ Super Heroes Page</h2>
//       <button onClick={refetch}>Fetch heroes</button>
//       {/* {data?.data.map((hero) => {
//         return <div key={hero.name}>{hero.name}</div>;
//       })} */}
//     </>
//   );
// };

// On component mount call APi

// const RQSuperHeroesPage = () => {
//   const results = useQuery("super-heroes", fetchSuperHeroes, {
//     // cacheTime: 5000, // 5 sec
//     // staleTime: 30000, // 30 sec
//     // refetchOnMount: true, // default is true
//     // refetchOnWindowFocus: "always", // default is true, we can also set false value
//     // below comment for both
//     // refetchInterval: 2000,
//     // refetchIntervalInBackground: true,
//   });
//   const { isLoading, data, isError, error, isFetching } = results;

//   console.log("isFetching :>> ", isFetching);
//   console.log("isLoading :>> ", isLoading);
//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }

//   return (
//     <>
//       <h2>RQ Super Heroes Page</h2>
//       {data?.data.map((hero) => {
//         return <div key={hero.name}>{hero.name}</div>;
//       })}
//     </>
//   );
// };

// Video - 21

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useAddSuperHeroData,
  useSuperHerosData,
} from "../hooks/useSuperHeroesData";

const RQSuperHeroesPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const onSuccess = (data) => {
    console.log("Perform side effect data fetching", data);
  };

  const onError = (error) => {
    console.log("Perform side effect data encountering error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHerosData(onSuccess, onError);

  const { mutate: addHero } = useAddSuperHeroData();

  const handleAddHeroClick = () => {
    console.log("name,alterEgo :>> ", name, alterEgo);
    const hero = { name, alterEgo };
    addHero(hero);
  };

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  console.log("data :>> ", data);

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      <button onClick={refetch}>Fetch heroes</button>
      {/* {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })} */}
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
};

// Video - 14

// import { Link } from "react-router-dom";
// import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

// const RQSuperHeroesPage = () => {
//   const onSuccess = (data) => {
//     console.log("Data fetched successfully...", data);
//   };
//   const onError = (error) => {
//     console.log("Something went wrong...", error);
//   };
//   const { isLoading, data, isError, error, isFetching, refetch } =
//     useSuperHeroesData(onSuccess, onError);

//   if (isLoading || isFetching) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }

//   return (
//     <>
//       <h2>RQ Super Heroes Page</h2>
//       <button onClick={refetch}>Fetch heroes</button>
//       {data?.data.map((hero) => {
//         return (
//           <div key={hero.id}>
//             <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// Video - 13

// import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

// const RQSuperHeroesPage = () => {
//   const onSuccess = (data) => {
//     console.log("Data fetched successfully...", data);
//   };
//   const onError = (error) => {
//     console.log("Something went wrong...", error);
//   };
//   const { isLoading, data, isError, error, isFetching, refetch } =
//     useSuperHeroesData(onSuccess, onError);

//   if (isLoading || isFetching) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }

//   return (
//     <>
//       <h2>RQ Super Heroes Page</h2>
//       <button onClick={refetch}>Fetch heroes</button>
//       {data.map((heroName) => {
//         return <div key={heroName}>{heroName}</div>;
//       })}
//     </>
//   );
// };

// Video - 12

// import { useQuery } from "react-query";
// import axios from "axios";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

// const RQSuperHeroesPage = () => {
//   const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
//     "super-heroes",
//     fetchSuperHeroes,
//     {
//       select: (data) => {
//         const superHeroesNames = data.data.map((hero) => hero.name);
//         return superHeroesNames;
//       },
//     }
//   );

//   if (isLoading || isFetching) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }

//   return (
//     <>
//       <h2>RQ Super Heroes Page</h2>
//       <button onClick={refetch}>Fetch heroes</button>
//       {data.map((heroName) => {
//         return <div key={heroName}>{heroName}</div>;
//       })}
//       {/* {data?.data.map((hero) => {
//         return <div key={hero.name}>{hero.name}</div>;
//       })} */}
//     </>
//   );
// };

// Video - 11

// import { useQuery } from "react-query";
// import axios from "axios";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

// const RQSuperHeroesPage = () => {
//   const onSuccess = (dataa) => {
//     console.log("Data fetched successfully...", data);
//   };
//   const onError = (error) => {
//     console.log("Something went wrong...", error);
//   };

//   const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
//     "super-heroes",
//     fetchSuperHeroes,
//     {
//       onSuccess, // onSuccess:onSuccess
//       onError, //onError:onError
//     }
//   );

//   console.log({ isLoading, isFetching });

//   if (isLoading || isFetching) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }

//   return (
//     <>
//       <h2>RQ Super Heroes Page</h2>
//       <button onClick={refetch}>Fetch heroes</button>
//       {data?.data.map((hero) => {
//         return <div key={hero.name}>{hero.name}</div>;
//       })}
//     </>
//   );
// };

// Video - 10

// import { useQuery } from "react-query";
// import axios from "axios";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

// const RQSuperHeroesPage = () => {
//   const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
//     "super-heroes",
//     fetchSuperHeroes,
//     {
//       enabled: false,
//     }
//   );

//   console.log({ isLoading, isFetching });

//   if (isLoading || isFetching) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }

//   return (
//     <>
//       <h2>RQ Super Heroes Page</h2>
//       <button onClick={refetch}>Fetch heroes</button>
//       {data?.data.map((hero) => {
//         return <div key={hero.name}>{hero.name}</div>;
//       })}
//     </>
//   );
// };

// Video - 9

// import { useQuery } from "react-query";
// import axios from "axios";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

// const RQSuperHeroesPage = () => {
//   const { isLoading, data, isError,error, isFetching } = useQuery(
//     "super-heroes",
//     fetchSuperHeroes,
//     {
//       refetchInterval: 2000, // 2 sec, Default value is true
//       refetchIntervalInBackground: true, // fetch data in background if window losse focus
//     }
//   );

//   console.log({ isLoading, isFetching });

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }

//   return (
//     <>
//       <h2>RQ Super Heroes Page</h2>
//       {data?.data.map((hero) => {
//         return <div key={hero.name}>{hero.name}</div>;
//       })}
//     </>
//   );
// };

// Video - 8

// import { useQuery } from "react-query";
// import axios from "axios";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

// const RQSuperHeroesPage = () => {
//   const { isLoading, data, isError,error, isFetching } = useQuery(
//     "super-heroes",
//     fetchSuperHeroes,
//     {
//       refetchOnMount: true, // Default value us true
//       refetchOnWindowFocus: true, // Default value us true
//     }
//   );

//   console.log({ isLoading, isFetching });

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }

//   return (
//     <>
//       <h2>RQ Super Heroes Page</h2>
//       {data?.data.map((hero) => {
//         return <div key={hero.name}>{hero.name}</div>;
//       })}
//     </>
//   );
// };

// Video - 7

// import { useQuery } from "react-query";
// import axios from "axios";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

// const RQSuperHeroesPage = () => {
//   const { isLoading, data, isError,error, isFetching } = useQuery(
//     "super-heroes",
//     fetchSuperHeroes,
//     {
//       // cacheTime: 5000,
//       staleTime: 30000, // 30 sec
//     }
//   );

//   console.log({ isLoading, isFetching });

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }

//   return (
//     <>
//       <h2>RQ Super Heroes Page</h2>
//       {data?.data.map((hero) => {
//         return <div key={hero.name}>{hero.name}</div>;
//       })}
//     </>
//   );
// };

// Video - 6

// import { useQuery } from "react-query";
// import axios from "axios";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

// const RQSuperHeroesPage = () => {
//   const { isLoading, data, isError,error, isFetching } = useQuery(
//     "super-heroes",
//     fetchSuperHeroes,
//     {
//       cacheTime: 5000, // 5 sec
//     }
//   );

//   console.log({ isLoading, isFetching });

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }

//   return (
//     <>
//       <h2>RQ Super Heroes Page</h2>
//       {data?.data.map((hero) => {
//         return <div key={hero.name}>{hero.name}</div>;
//       })}
//     </>
//   );
// };

// Video - 4

// import { useQuery } from "react-query";
// import axios from "axios";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
//   // return axios.get("http://localhost:4000/superheroes1"); // invalid url for checking error
// };

// const RQSuperHeroesPage = () => {
//   const { isLoading, data, isError, error } = useQuery(
//     "super-heroes",
//     fetchSuperHeroes
//   );

//   console.log("error :>> ", error);

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }

//   return (
//     <>
//       <h2>RQ Super Heroes Page</h2>
//       {data?.data.map((hero) => {
//         return <div key={hero.name}>{hero.name}</div>;
//       })}
//     </>
//   );
// };

// video - 3

// import { useQuery } from "react-query";
// import axios from "axios";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

// const RQSuperHeroesPage = () => {
//   const { isLoading, data } = useQuery("super-heroes", fetchSuperHeroes);
//   const result = useQuery("super-heroes", fetchSuperHeroes);
//   console.log("result :>> ", result);
//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <>
//       <h2>RQ Super Heroes Page</h2>
//       {data?.data.map((hero) => {
//         return <div key={hero.name}>{hero.name}</div>;
//       })}
//     </>
//   );
// };

export default RQSuperHeroesPage;
