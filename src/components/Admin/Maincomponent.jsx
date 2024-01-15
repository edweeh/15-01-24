import React, { useState } from 'react';
import Petform from './Petform'; // Update the path if necessary
import Petlist from './Petlist'; // Update the path if necessary

const Maincomponent = () => {
  const [pets, setPets] = useState([]);

  const addPet = (newPet) => {
    setPets([...pets, newPet]);
  };

  const deletePet = (petName) => {
    const updatedPets = pets.filter((pet) => pet.name !== petName);
    setPets(updatedPets);
  };

  return (
    <div>
      <Petform addPet={addPet} />
      <Petlist pets={pets} deletePet={deletePet} />
    </div>
  );
};

export default Maincomponent;
