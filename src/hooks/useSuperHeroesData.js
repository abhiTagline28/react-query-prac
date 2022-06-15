// import { useMutation, useQuery, useQueryClient } from "react-query";
// import axios from "axios";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

// const addSuperHero = (hero) => {
//   return axios.post(`http://localhost:4000/superheroes`, hero);
// };

// export const useSuperHerosData = (onSuccess, onError) => {
//   return useQuery("super-heroes", fetchSuperHeroes, {
//     enabled: true,

//     onSuccess,
//     onError,

//     // select: (data) => {
//     //   const superHeroesNames = data.data.map((hero) => hero.name);
//     //   return superHeroesNames;
//     // },
//   });
// };

// export const useSuperHerosData = (onSuccess, onError) => {
//   return useQuery("super-heroes", fetchSuperHeroes, {
//     enabled: false,

//     onSuccess,
//     onError,

//     // select: (data) => {
//     //   const superHeroesNames = data.data.map((hero) => hero.name);
//     //   return superHeroesNames;
//     // },
//   });
// };

// Optimistic Updates

// export const useAddSuperHeroData = () => {
//   const queryClient = useQueryClient();
//   return useMutation(addSuperHero, {
//     onMutate: async (newHero) => {
//       await queryClient.cancelQueries("super-heroes");
//       const previousHeroData = queryClient.getQueryData("super-heroes");
//       queryClient.setQueryData("super-heroes", (oldQueryData) => {
//         return {
//           ...oldQueryData,
//           data: [
//             ...oldQueryData.data,
//             { id: oldQueryData?.data?.length + 1, ...newHero },
//           ],
//         };
//       });
//       return {
//         previousHeroData,
//       };
//     },
//     onError: (_error, _hero, context) => {
//       queryClient.setQueryData("super-heroes", context.previousHeroData);
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries("super-heroes");
//     },
//   });
// };

// add data in db and fetch data without ivalidateQuery and unneccesorry fetch api call
// We can use catch data and new added data in response of useMutation

// export const useAddSuperHeroData = () => {
//   const queryClient = useQueryClient();
//   return useMutation(addSuperHero, {
//     onSuccess: (data) => {
//       // queryClient.invalidateQueries("super-heroes");
//       queryClient.setQueryData("super-heroes", (oldQueryData) => {
//         return {
//           ...oldQueryData,
//           data: [...oldQueryData.data, data.data],
//         };
//       });
//     },
//   });
// };

// add data in db and refetch added data into list and show

// export const useAddSuperHeroData = () => {
//   const queryClient = useQueryClient();
//   return useMutation(addSuperHero, {
//     onSuccess: () => {
//       queryClient.invalidateQueries("super-heroes");
//     },
//   });
// };

// Add data in database

// export const useAddSuperHeroData = () => {
//   return useMutation(addSuperHero);
// };

// Video - 25

import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { request } from "../utils/axios-utils";

const fetchSuperHeroes = () => {
  // return axios.get("http://localhost:4000/superheroes");
  return request({ url: "/superheroes" });
};

const addSuperHero = (hero) => {
  // return axios.post(`http://localhost:4000/superheroes`, hero);
  return request({ url: "/superheroes", method: "POST", data: hero });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("super-heroes");
      const previousHeroData = queryClient.getQueryData("super-heroes");
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        };
      });
      return {
        previousHeroData,
      };
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData("super-heroes", context.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("super-heroes");
    },
  });
};

// Video - 24

// import { useMutation, useQuery, useQueryClient } from "react-query";
// import axios from "axios";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

// const addSuperHero = (hero) => {
//   return axios.post(`http://localhost:4000/superheroes`, hero);
// };

// export const useAddSuperHeroData = () => {
//   const queryClient = useQueryClient();
//   return useMutation(addSuperHero, {
//     onMutate: async (newHero) => {
//       await queryClient.cancelQueries("super-heroes");
//       const previousHeroData = queryClient.getQueryData("super-heroes");
//       queryClient.setQueryData("super-heroes", (oldQueryData) => {
//         return {
//           ...oldQueryData,
//           data: [
//             ...oldQueryData.data,
//             { id: oldQueryData?.data?.length + 1, ...newHero },
//           ],
//         };
//       });
//       return {
//         previousHeroData,
//       };
//     },
//     onError: (_error, _hero, context) => {
//       queryClient.setQueryData("super-heroes", context.previousHeroData);
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries("super-heroes");
//     },
//   });
// };

// Video - 23

// import { useMutation, useQuery, useQueryClient } from "react-query";
// import axios from "axios";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

// const addSuperHero = (hero) => {
//   return axios.post(`http://localhost:4000/superheroes`, hero);
// };

// // Add data in database

// export const useAddSuperHeroData = () => {
//   const queryClient = useQueryClient();
//   return useMutation(addSuperHero, {
//     onSuccess: (data) => {
//       // queryClient.invalidateQueries("super-heroes");
//       queryClient.setQueryData("super-heroes", (oldQueryData) => {
//         return {
//           ...oldQueryData,
//           data: [...oldQueryData.data, data.data],
//         };
//       });
//     },
//   });
// };

// Video - 22

// import { useMutation, useQuery, useQueryClient } from "react-query";
// import axios from "axios";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

// const addSuperHero = (hero) => {
//   return axios.post(`http://localhost:4000/superheroes`, hero);
// };

// // Add data in database

// export const useAddSuperHeroData = () => {
//   const queryClient = useQueryClient();
//   return useMutation(addSuperHero, {
//     onSuccess: () => {
//       queryClient.invalidateQueries("super-heroes");
//     },
//   });
// };

// Video - 21

// import { useMutation, useQuery } from "react-query";
// import axios from "axios";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

// const addSuperHero = (hero) => {
//   return axios.post(`http://localhost:4000/superheroes`, hero);
// };

// // Add data in database

// export const useAddSuperHeroData = () => {
//   return useMutation(addSuperHero);
// };

// Video - 13

// import { useQuery } from "react-query";
// import axios from "axios";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

// export const useSuperHeroesData = (onSuccess, onError) => {
//   return useQuery("super-heroes", fetchSuperHeroes, {
//     onError,
//     onSuccess,
//     select: (data) => {
//       const superHeroesNames = data.data.map((hero) => hero.name);
//       return superHeroesNames;
//     },
//   });
// };
