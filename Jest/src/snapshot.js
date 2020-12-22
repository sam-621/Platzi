export const getCharacter = (data) => {
  return {
    id: data.id,
    name: data.name,
    status: data.status,
    species: data.species,
    gender: data.gender,
  };
};
